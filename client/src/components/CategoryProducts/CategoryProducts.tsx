import { useGetBookmarkIds } from '@/hooks/queries/bookmark';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { getCategoryProducts } from '@/lib/api/product';
import { userState } from '@/recoil/user';
import { IProduct } from '@/types';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Card from '../Card';
import * as S from './styles';
import LoadingCards from '../Skeleton/LoadingCards';
import { ORDER_TYPE } from '@/utils/constant/categoryOrder';

interface IProps {
  subCategoryId: number;
}

const CategoryProducts = ({ subCategoryId }: IProps) => {
  const [start, setStart] = useState(0);
  const [user] = useRecoilState(userState);
  const [order, setOrder] = useState('createdAt DESC');
  const { data: bookmarkIdList, remove: removeBookmark } = useGetBookmarkIds(
    !!user
  );

  useEffect(() => {
    if (!user) {
      removeBookmark();
    }
  }, [user, removeBookmark]);

  const { ref, inView, isLoading, isFetching, data, fetchNextPage, remove } =
    useInfiniteScroll<IProduct[]>({
      key: ['category', subCategoryId],
      fetchingFunction: getCategoryProducts,
      fetchParams: {
        start,
        subCateogry: subCategoryId,
        orderType: order,
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
    remove();
    return () => {
      setStart(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subCategoryId]);

  const renderCard = () => {
    return data?.pages
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
          bookmarkList={bookmarkIdList}
        />
      ));
  };

  const orderChange = (orderType: string) => {
    remove();
    setOrder(orderType);
    return () => {
      setStart(0);
    };
  };

  const ProductsOrder = ORDER_TYPE.map((orderType) => {
    return (
      <button
        key={orderType.order}
        className={order == orderType.order ? 'selected' : ''}
        onClick={() => orderChange(orderType.order)}
      >
        {orderType.text}
      </button>
    );
  });

  return (
    <>
      <S.OrderWrapper>{ProductsOrder}</S.OrderWrapper>
      <LoadingCards
        skeletonNum={20}
        showSkeleton={isLoading || isFetching}
        component={renderCard()}
      />
      <div ref={ref}></div>
    </>
  );
};

export default CategoryProducts;
