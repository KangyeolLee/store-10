import React from 'react';
import { CloseSVG } from '@/assets/svgs';
import * as S from './styles';
import { logout } from '@/lib/api/auth/logout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '@/recoil/user';
import { useHistory } from '@/lib/Router';
import { ICategory } from '@/types';
import { CategoryList } from '@/recoil/category';
import useMission from '@/hooks/useMission';

interface Props {
  isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ ...props }: Props) => {
  const { isOpen, setIsOpen } = props;
  const [user, setUser] = useRecoilState(userState);
  const closeSidebar = () => setIsOpen(false);
  const { historyPush } = useHistory();
  const [, setMissionList] = useMission();
  const categories = useRecoilValue(CategoryList);

  const onClickLogout = async () => {
    await logout();
    setUser(null);
    historyPush('/');
  };

  const categoryRouterPush = (id: number) => {
    setMissionList('category', true);
    closeSidebar();
    historyPush(`/category/${id}`);
  };

  const renderCategory = (categories: ICategory[]) =>
    categories.map((main: ICategory) => (
      <li data-main_category_id={main.id} key={'mainCategory_' + main.id}>
        <div>{main.title}</div>
        <S.SubCategory className={isOpen ? '' : 'none'}>
          {main.subCategories.map((sub) => (
            <dd
              onClick={() => categoryRouterPush(sub.id)}
              key={'subCategory_' + sub.id}
            >
              {sub.title}
            </dd>
          ))}
        </S.SubCategory>
      </li>
    ));

  return (
    <>
      <S.SideBar className={isOpen ? 'active' : ''}>
        <S.Top>
          <div>
            {user ? `${user.name}님 환영합니다! ` : '로그인이 필요합니다.'}
          </div>
          <S.IconsWrapper>
            {user ? <button onClick={onClickLogout}>로그아웃</button> : null}
            <CloseSVG onClick={closeSidebar} />
          </S.IconsWrapper>
        </S.Top>
        <S.Contents>
          <S.ContentTitle>카테고리</S.ContentTitle>
          <S.Categories>{renderCategory(categories)}</S.Categories>
        </S.Contents>
      </S.SideBar>
      <S.Backdrop className="backdorp" onClick={closeSidebar}></S.Backdrop>
    </>
  );
};

export default Sidebar;
