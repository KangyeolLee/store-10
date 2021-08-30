import React, { Suspense, useCallback, useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Route, Switch } from '@/lib/Router';
import Main from '@/pages/Main';
import Detail from '@/pages/Detail';
import Footer from '@/components/Footer';
import ShoppingCart from '@/pages/ShoppingCart';
import MyPage from '@/pages/Mypage';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';
import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';
import SelectAuth from '@/pages/SelectAuth';
import Approval from '@/pages/Approval';
import Category from '@/pages/Category';
import SignUp from '@/pages/SignUp';
import Notice from '@/pages/Notice';
import Order from '@/pages/Order';
import Search from '@/pages/Search';
import Paid from '@/pages/Order/Paid';
import Loading from '@/components/Shared/Loading';
import { QueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from '@/components/Shared/Error';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import Bookmark from '@/pages/Bookmark';
import { getCurrentUser } from '@/lib/api/user/getCurrentUser';
import { TermsOfUse, TermsOfPrivacy } from '@/pages/Terms';
import Vendor from '@/pages/Vendor';
import ThemeChanger from '@/components/ThemeChanger/ThemeChanger';
import useGlobalTheme from '@/hooks/useGlobalTheme';
import useModal from '@/hooks/useModal';
import MissionModal from '@/components/Shared/Modal/MissionModal';
import useMission from '@/hooks/useMission';

const App = () => {
  const [themeMode, toggleMode, themeString] = useGlobalTheme();
  const [isOpenMissionModal, toggleMissionModal] = useModal(false);
  const [missionList, setMissionList] = useMission();
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);
  const getInitialUser = useCallback(async () => {
    if (!user) {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (e) {
        setLoading(false);
      }
    }
  }, [user, setUser]);

  useEffect(() => {
    if (user) {
      setLoading(false);
      if (!user.is_oauth && user.id !== 36) {
        setMissionList('login', true);
      }
    }
  }, [user, missionList.login, setMissionList]);

  useEffect(() => {
    getInitialUser();
  }, [getInitialUser]);

  return (
    <ThemeProvider theme={themeMode}>
      <Suspense fallback={loading ? <Loading /> : null}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => (
                <Error resetErrorBoundary={resetErrorBoundary} />
              )}
            >
              <S.RootWrapper>
                <Header />
                <Switch>
                  <Route path="/" component={Main} />
                  <Route path="/select_auth" component={SelectAuth} />
                  <Route path="/approval/:authtype" component={Approval} />
                  <Route path="/bookmark" component={Bookmark} />
                  <Route path="/category/:categoryId" component={Category} />
                  <Route path="/search/:search" component={Search} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/login" component={Login} />
                  <Route path="/detail/:id" component={Detail} />
                  <Route path="/notice" component={Notice} />
                  <Route path="/privacy" component={TermsOfPrivacy} />
                  <Route path="/terms" component={TermsOfUse} />
                  <Route path="/vendor" component={Vendor} />
                  <Route path="/cart" component={ShoppingCart} />
                  <Route path="/mypage" component={MyPage} />
                  <Route path="/order/:id/paid" component={Paid} />
                  <Route path="/order/:id" component={Order} />
                  <Route path="/*" component={NotFound} />
                </Switch>
                <Footer />
                <ThemeChanger
                  toggleMode={toggleMode}
                  currentTheme={themeString}
                  toggleMissionModal={toggleMissionModal}
                />
                {isOpenMissionModal && (
                  <MissionModal toggleModal={toggleMissionModal} />
                )}
              </S.RootWrapper>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
