import Button from '@/components/Shared/Button';
import Title from '@/components/Shared/Title';
import React, { useRef } from 'react';
import * as S from '../styles';
import useModal from '@/hooks/useModal';
import { RequestModal } from '@/components/Shared/Modal';
import Collapse from '@/components/Shared/Collapse';
import {
  useGetProductQuestionById,
  useGetProductQuestionCount,
} from '@/hooks/queries/product';
import { useParams } from '@/lib/Router';
import Pagination from '@/components/Shared/Pagination';
import usePagination from '@/hooks/usePagination';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import { notify } from '@/components/Shared/Toastify';
import { QUESTION_LIMIT } from '@/utils/constant/offsetLimit';
import { QUESTION_HEADER } from '@/utils/constant/CollapseHeaders';
import Thung from '@/components/Thung';
import { ResponseError } from '@/components/Shared/Error';
import { ReviewSkeleton } from '@/components/Skeleton/ProductSkeleton';

const ProductRequest = () => {
  const { id } = useParams().params;
  const topRef = useRef<HTMLDivElement>(null);
  const [user] = useRecoilState(userState);
  const [offset, handleOnClickPage] = usePagination(QUESTION_LIMIT, topRef);
  const [isOpen, toggleModal] = useModal(false);
  const {
    data: questions,
    isLoading,
    error,
  } = useGetProductQuestionById(id, offset);
  const { data: count } = useGetProductQuestionCount(id);

  if (isLoading || !questions || !count) {
    return <ReviewSkeleton />;
  }

  if (error) {
    return <ResponseError message={error.message} />;
  }

  const handleClickQuestionButton = () => {
    if (!user) {
      return notify('error', '로그인 후 작성 가능합니다.');
    }

    toggleModal();
  };

  return (
    <S.PanelWrapper ref={topRef} className="pagination-scroll-top">
      <S.TopArea>
        <Title className="title" level={5}>
          상품문의 ({count.count})
        </Title>
        <Button
          size="Default"
          color="primary"
          type="button"
          onClick={handleClickQuestionButton}
        >
          작성하기
        </Button>
      </S.TopArea>

      {!!questions.length ? (
        <Collapse
          headers={QUESTION_HEADER}
          items={questions}
          gaps="1fr 1fr 4fr 1fr 1fr 1fr"
        />
      ) : (
        <Thung title="아직 작성된 문의가 없어요..!" className="thung-review" />
      )}

      <Pagination
        handleOnClickPage={handleOnClickPage}
        count={Math.ceil(count.count / QUESTION_LIMIT)}
      />

      {isOpen && <RequestModal toggleModal={toggleModal} />}
    </S.PanelWrapper>
  );
};

export default ProductRequest;
