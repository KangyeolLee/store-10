import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

interface IRouter {
  children: React.ReactNode;
  initialPath?: string;
}

interface ISwitch {
  children: React.ReactNode;
  currentPath: string;
}

interface IRoute {
  component: React.FunctionComponent;
  path: string;
  props?: Record<string, unknown>;
}

interface Route {
  props: IRoute;
}

interface IRouterContext {
  currentPath: string;
  historyPush: (pathname: string, data?: Record<string, unknown>) => void;
}

interface IRouteContext {
  params: Record<string, string>;
  origin: string;
}

interface ILink {
  children?: React.ReactNode;
  to: string;
}

interface INavLink extends ILink {
  activeClassName: string;
}

interface IMatches {
  origin: string;
  params: Record<string, string>;
}

const RouterContext = React.createContext<IRouterContext>({
  currentPath: '',
  historyPush: () => null,
});

const RouteContext = React.createContext<IRouteContext>({
  params: {},
  origin: '',
});

export const Router = ({ children, initialPath }: IRouter) => {
  const [currentPath, setCurrentPath] = useState(
    initialPath || window.location.pathname
  );

  const historyPush = useCallback((pathname: string, data = {}) => {
    window.history.pushState(data, pathname, window.location.origin + pathname);
    window.scrollTo(0, 0);
    setCurrentPath(pathname);
  }, []);

  const handlePathChange = useCallback(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, [historyPush, handlePathChange]);

  const value = useMemo(() => {
    return { currentPath, historyPush };
  }, [currentPath, historyPush]);

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};

export const Switch = ({ children }: IRouter) => {
  const { currentPath } = useHistory();
  const match = useMemo(
    () => matchRoutes({ children, currentPath }),
    [children, currentPath]
  );

  const value = useMemo(() => {
    return {
      params: match.params,
      origin: match.origin,
    };
  }, [match]);

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export const Route = ({ path, component, props }: IRoute) => {
  const { currentPath } = useHistory();
  const params = useParams();

  if (currentPath === path || path === params.origin) {
    return React.createElement(component, props);
  } else if (path === '/*' && params.origin === '/404') {
    return React.createElement(component, props);
  } else {
    return null;
  }
};

export const useHistory = (): IRouterContext => {
  return useContext<IRouterContext>(RouterContext);
};

export const useParams = () => {
  return useContext<IRouteContext>(RouteContext);
};

export const Link = ({ to, children }: ILink) => {
  const { historyPush } = useHistory();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    historyPush(to);
  };
  return (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  );
};

export const NavLink = ({ to, children, activeClassName }: INavLink) => {
  const { currentPath, historyPush } = useHistory();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    historyPush(to);
  };
  return (
    <a
      href={to}
      onClick={onClick}
      className={currentPath === to ? activeClassName : ''}
    >
      {children}
    </a>
  );
};

export const Redirect = ({ to }: { to: string }) => {
  const { historyPush } = useHistory();
  useEffect(() => {
    historyPush(to);
  }, [to, historyPush]);

  return null;
};

const extractPath = (path: string) => {
  const keys: string[] = [];
  path = path.replace(/:(\w+)/g, (_, key: string) => {
    if (key) keys.push(key);
    return '([^\\/]+)';
  });

  const regex = new RegExp(`^(${path})$`, 'i');
  return { regex, keys };
};

const matchRoutes = ({ children, currentPath }: ISwitch) => {
  const matches: IMatches[] = [];
  const arrayChildren = React.Children.toArray(children) as Route[];

  for (const child of arrayChildren) {
    const { regex, keys } = extractPath(child.props.path);
    const match = currentPath.match(regex);

    if (match) {
      const params = match.slice(2);
      matches.push({
        origin: child.props.path,
        params: keys.reduce(
          (collection: Record<string, string>, param, index) => {
            collection[param] = params[index];
            return collection;
          },
          {}
        ),
      });
      break;
    }
  }

  return matches[0] ?? { params: {}, origin: '/404' };
};
