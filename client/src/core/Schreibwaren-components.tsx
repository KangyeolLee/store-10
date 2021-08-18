import React, { useContext, FC, useEffect } from 'react';
import { compile, serialize, prefixer, stringify, middleware } from 'stylis';
import {
  ThemeContext,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { nanoid } from 'nanoid';

interface IJSXProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown; // 타입추론이 되게끔 타입을 선언해주어야 할 거 같은데...
  // styled.div<ITest> <-- ITest를 갖고 올 수 있는 방법이 있을까요
}

interface IProps extends IJSXProps {
  theme: DefaultTheme;
}

type ExpType = ((
  props: IProps
) => string | FlattenSimpleInterpolation | undefined)[];

type StyledComponentType = <T>( // ITest
  styles: TemplateStringsArray,
  ...exps: ExpType
) => FC<T>;

const schreibwarenComponents = (tag: string): StyledComponentType => {
  const classMap = new Map<string, string>();
  const $style = document.createElement('style');

  return (styles: TemplateStringsArray, ...exps: ExpType) => {
    const JSXElement = (props: IJSXProps) => {
      const theme = useContext(ThemeContext);
      const parsedStyles = parseStyles(styles, exps, { theme, ...props });

      let className = '';

      const isAlreadyExists = classMap.has(parsedStyles);

      if (isAlreadyExists) {
        className = classMap.get(parsedStyles) as string;
      } else {
        className = `sb-c${nanoid()}`;
        classMap.set(parsedStyles, className);
      }

      const preprocessCSS = serialize(
        compile(`.${className}{${parsedStyles}}`),
        middleware([prefixer, stringify])
      );

      useEffect(() => {
        $style.innerHTML += preprocessCSS;
        (document.querySelector('head') as HTMLHeadElement).appendChild($style);
        return () => {
          $style.remove();
        };
      }, [preprocessCSS]);

      const { children } = props;

      if (props.className) {
        className += ` ${props.className}`;
      }

      const newProps: Record<string, unknown> = {};
      Object.entries(props).forEach(([key, value]) => {
        if (typeof value === 'boolean') {
          newProps[key] = (value as boolean).toString();
        } else {
          newProps[key] = value;
        }
      });

      return React.createElement(tag, { className, ...newProps }, children);
    };
    return JSXElement;
  };
};

const parseStyles = (
  styles: TemplateStringsArray,
  exps: ExpType,
  props: IProps
) => {
  return styles
    .map((str, i) => {
      let expResult = '';
      if (exps[i]) {
        if (typeof exps[i] === 'function') {
          expResult = `${(exps[i] as (props: IProps) => string | number)(
            props
          )}`;
        }
      }
      return `${str}${expResult}`;
    })
    .join('');
};

export const css = (styles: TemplateStringsArray, ...args: string[]) =>
  styles.map((str, i) => `${str}${args[i] ?? ''}`).join('');

const styled: Record<string, StyledComponentType> = {};
styled['div'] = schreibwarenComponents('div');

export default styled;
