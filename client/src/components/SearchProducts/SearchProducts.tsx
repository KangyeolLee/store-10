import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { getSearchProducts } from '@/lib/api/product';
import { IProduct } from '@/types';
import React, { useEffect, useState } from 'react';
import Card from '../Card';
import CardWrapper from '../CardWrapper';
import * as S from './styles';

interface IProps {
  searchText: string;
}

const SearchProducts = ({ ...props }: IProps) => {
  const [start, setStart] = useState(0);
  const searchText = decodeURI(props.searchText);
  const { ref, inView, data, isLoading, fetchNextPage } = useInfiniteScroll<
    IProduct[]
  >({
    key: ['search', searchText],
    fetchingFunction: getSearchProducts,
    fetchParams: {
      start,
      searchText,
    },
  });

  useEffect(() => {
    if (start != 0) {
      fetchNextPage({
        pageParam: {
          start: start,
        },
      });
    }
  }, [fetchNextPage, start]);

  useEffect(() => {
    if (inView && data?.pages[data.pages.length - 1].length == 20)
      setStart(start + 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    setStart(0);
  }, [searchText]);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (!data || data.pages.flat().length == 0) {
    return (
      <S.EmptyComponent title={`${searchText}에 해당하는 상품이 없어요!`} />
    );
  }

  const renderCard = () => {
    return data.pages
      .flat()
      .map((item) => (
        <Card
          linkId={item.id}
          key={item.id}
          discount={item.discount}
          bgColor="primary"
          src={item.productImage[0].url}
          price={item.price}
          title={item.title}
        />
      ));
  };

  return (
    <>
      <CardWrapper>{renderCard()}</CardWrapper>
      <div ref={ref}></div>
    </>
  );
};

export default SearchProducts;
