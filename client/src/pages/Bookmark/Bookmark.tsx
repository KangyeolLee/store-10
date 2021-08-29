import Card from '@/components/Card';
import CardWrapper from '@/components/CardWrapper';
import { notify } from '@/components/Shared/Toastify';
import { useDeleteDetailBookmark } from '@/hooks/queries/bookmark';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { getDetailBookmarkProducts } from '@/lib/api/bookmark/getDetailBookmarkProducts';
import { Redirect } from '@/lib/Router';
import { userState } from '@/recoil/user';
import { IBookmarkProduct } from '@/types';
import React, { Dispatch, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Loading from '@/components/Shared/Loading';
import * as S from './style';
import { Close2, Edit, Trash } from '@/assets/svgs';
import { DeleteConfirmModal } from '@/components/Shared/Modal';
import useModal from '@/hooks/useModal';

const renderProducts = (
  isLoading: boolean,
  data: IBookmarkProduct[] | undefined,
  checkBoxDisplay: boolean,
  setCheckedList: Dispatch<number[]>,
  checkedList: number[]
) => {
  if (isLoading || !data) {
    return <div></div>;
  }

  return data.map((product: IBookmarkProduct) => (
    <Card
      key={product.productId}
      linkId={product.productId}
      bgColor="primary"
      src={product.image}
      title={product.title}
      price={product.price}
      bottomDisplay={false}
      checkBoxDisplay={checkBoxDisplay}
      setCheckedList={setCheckedList}
      checkedList={checkedList}
    />
  ));
};

const Bookmark = () => {
  const [isEdit, setIsEdit] = useState(true);
  const { mutate } = useDeleteDetailBookmark();
  const [user] = useRecoilState(userState);
  const [checkedList, setCheckedList] = useState<number[]>([]);
  const [modalOpen, toggleModal] = useModal(false);

  const [start, setStart] = useState(0);

  const { ref, inView, data, isLoading, fetchNextPage, remove } =
    useInfiniteScroll<IBookmarkProduct[]>({
      key: 'detailBookmarkedProduct',
      fetchingFunction: getDetailBookmarkProducts,
      fetchParams: {
        start,
        orderType: 'createdAt',
      },
    });

  const onClickRemove = () => {
    mutate(checkedList);
    toggleModal();
    setCheckedList([]);
  };

  // unmount 됬을 때 데이터 초기화
  useEffect(() => {
    return () => {
      remove();
    };
  }, [remove]);

  // 다음 페이지
  useEffect(() => {
    if (start >= 8) {
      fetchNextPage({
        pageParam: {
          start: start,
        },
      });
    }
  }, [fetchNextPage, start]);

  useEffect(() => {
    if (inView && data?.pages[data.pages.length - 1].length === 8) {
      setStart(start + 8);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const toggleIsEdit = (val: boolean) => {
    setIsEdit(val);
  };

  const isAllchecked =
    !isEdit && checkedList.length === data?.pages.flat().length;

  const onChangeAllCheck = () => {
    if (isAllchecked) {
      setCheckedList([]);
    } else {
      if (data)
        setCheckedList(data?.pages.flat().map((item) => item.productId));
    }
  };

  const removeBookmarkItems = useCallback(() => {
    if (checkedList.length === 0) {
      notify('error', '삭제할 상품을 한개 이상 선택해주세요!');
    } else {
      toggleModal();
    }
  }, [toggleModal, checkedList.length]);

  if (!user) return <Redirect to="/login" />;

  if (isLoading) {
    return <Loading />;
  }

  if (!data) return <div>nodata</div>;

  return (
    <S.BookmarkContainer className="container">
      <S.BookmarkTitle level={4}>찜 목록</S.BookmarkTitle>
      <S.ButtonContainer>
        {data?.pages[0].length ? (
          isEdit ? (
            <S.EditButton
              type="button"
              color="white"
              size="Small"
              onClick={() => {
                toggleIsEdit(false);
              }}
            >
              편집
              <Edit className="edit" width="2rem" height="2rem" />
            </S.EditButton>
          ) : (
            <>
              <S.AllCheckBox
                onChange={onChangeAllCheck}
                checked={isAllchecked}
                label="전체선택"
              />
              <S.EditButton
                type="button"
                color="white"
                size="Small"
                onClick={removeBookmarkItems}
                className="red"
              >
                삭제
                <Trash width="2rem" height="2rem" />
              </S.EditButton>
              <S.EditButton
                type="button"
                color="white"
                size="Small"
                onClick={() => {
                  toggleIsEdit(true);
                }}
              >
                취소
                <S.BookmarkClose width="1.5rem" height="1.5rem" />
              </S.EditButton>
            </>
          )
        ) : null}
      </S.ButtonContainer>
      <S.CardContainer>
        {data?.pages[0].length ? (
          <>
            <CardWrapper>
              {renderProducts(
                isLoading,
                data.pages.flat(),
                !isEdit,
                setCheckedList,
                checkedList
              )}
            </CardWrapper>
            <div ref={ref}></div>
          </>
        ) : (
          <S.BookmarkThung title="찜한 상품이 없습니다! 맘에 드는 상품을 찜해보세요." />
        )}
      </S.CardContainer>
      {modalOpen && (
        <DeleteConfirmModal
          toggleModal={toggleModal}
          removeSelected={onClickRemove}
        />
      )}
    </S.BookmarkContainer>
  );
};

export default Bookmark;
