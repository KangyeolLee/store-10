import { ISearchData } from '@/types';
import React, { useEffect } from 'react';
import * as S from './style';
import { useCallback } from 'react';
import { CloseSVG } from '@/assets/svgs';
import Card from '@/components/Card';
import { useRecoilState } from 'recoil';
import { useGetBookmarkIds } from '@/hooks/queries/bookmark';
import { userState } from '@/recoil/user';
import { useHistory } from '@/lib/Router';

type Prop = {
  searchValue: string;
  recentItems: string[];
  searchData: ISearchData[];
  toggleOpen: () => void;
  addRecentSearch: (value: string) => void;
  removeRecentSearch: (idx: number) => void;
};

const SearchItem = ({ ...props }: Prop) => {
  const {
    searchValue,
    toggleOpen,
    addRecentSearch,
    removeRecentSearch,
    recentItems,
    searchData,
  } = props;
  const [user] = useRecoilState(userState);
  const { data: bookmarkIdList, remove } = useGetBookmarkIds(!!user);
  const { historyPush } = useHistory();
  useEffect(() => {
    if (!user) {
      remove();
    }
  }, [user, remove]);

  const selectItem = useCallback(() => {
    toggleOpen();
    addRecentSearch(searchValue);
  }, [addRecentSearch, searchValue, toggleOpen]);

  const renderProducts = () =>
    searchData.map((product: ISearchData) => (
      <div key={'search_' + product.id} onClick={selectItem}>
        <Card
          linkId={product.id}
          discount={product.discount}
          bgColor="primary"
          src={product.image}
          price={product.price}
          title={product.title}
          bookmarkList={bookmarkIdList}
        />
      </div>
    ));
  const recentItemClickHandler = useCallback(
    (search: string) => {
      historyPush(`/search/${search}`);
      toggleOpen();
    },
    [historyPush, toggleOpen]
  );

  const removeRecentItem = useCallback(
    (e: React.MouseEvent, idx: number) => {
      e.stopPropagation();
      removeRecentSearch(idx);
    },
    [removeRecentSearch]
  );

  return (
    <>
      <S.SearchItemContainer>
        <S.RecentTitle>최근 검색어</S.RecentTitle>
        {recentItems && (
          <S.RecentSearchUl>
            {recentItems.map((item: string, idx) => (
              <S.RecentSearchItem
                key={idx}
                onClick={() => recentItemClickHandler(item)}
              >
                {item}
                <CloseSVG
                  onClick={(e: React.MouseEvent) => removeRecentItem(e, idx)}
                />
              </S.RecentSearchItem>
            ))}
          </S.RecentSearchUl>
        )}
        <S.RecentTitle>Elastic Search</S.RecentTitle>
        {searchData.length ? (
          <S.SearchItemWrapper>{renderProducts()}</S.SearchItemWrapper>
        ) : (
          <S.EmptyData title="검색어를 입력해주세요." />
        )}
      </S.SearchItemContainer>
    </>
  );
};

export default SearchItem;
