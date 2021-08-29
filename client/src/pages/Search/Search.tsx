import React from 'react';
import { useParams } from '@/lib/Router';
import * as S from './styles';
import SearchProducts from '@/components/SearchProducts';

const Search = () => {
  const { search } = useParams().params;

  return (
    <S.SearchWrapper className="container">
      <S.SearchHeader>{`"${decodeURI(
        search
      )}"의 검색 결과 입니다.`}</S.SearchHeader>
      <SearchProducts searchText={search} />
    </S.SearchWrapper>
  );
};

export default Search;
