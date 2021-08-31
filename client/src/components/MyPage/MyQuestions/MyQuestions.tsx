import { PanelWrapper } from '@/components/ProductDetails/styles';
import React, { useRef, useState } from 'react';
import * as S from './styles';
import Collapse from '@/components/Shared/Collapse';
import Pagination from '@/components/Shared/Pagination';
import { DeleteConfirmModal } from '@/components/Shared/Modal';
import usePagination from '@/hooks/usePagination';
import useModal from '@/hooks/useModal';
import {
  useDeleteQuestion,
  useGetProductQuestionsByUser,
} from '@/hooks/queries/product';
import { MY_QUESTION_HEADER } from '@/utils/constant/CollapseHeaders';
import { QUESTION_LIMIT } from '@/utils/constant/offsetLimit';
import { RequestUpdateModal } from '@/components/Shared/Modal';
import { notify } from '@/components/Shared/Toastify';
import Thung from '@/components/Thung';
import Title from '@/components/Shared/Title';
import { ReviewSkeleton } from '@/components/Skeleton/ProductSkeleton';

const MyQuestions = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const [offset, handleOnClickPage] = usePagination(QUESTION_LIMIT, topRef);
  const [isOpenRemoveModal, toggleRemoveModal] = useModal(false);
  const [isOpenUpdateModal, toggleUpdateModal] = useModal(false);
  const [seletedQuestion, setSelectedQuestion] = useState(0);
  const { data, isLoading, error } = useGetProductQuestionsByUser(offset);
  const { mutate: removeQuestion } = useDeleteQuestion();

  if (isLoading || !data) {
    return <ReviewSkeleton />;
  }

  if (error) {
    return <div>error</div>;
  }

  const { questions, count } = data;

  const handleRemoveOnQuestion = () => {
    removeQuestion(seletedQuestion);
    toggleRemoveModal();
  };

  const handleRemoveQuestion = (target: number) => {
    setSelectedQuestion(target);
    toggleRemoveModal();
  };

  const handleUpdateQuestion = (target: number) => {
    const seleted = questions.filter(
      (question) => question.answer && question.id === target
    )[0];

    if (seleted) {
      return notify('error', '완료된 문의는 더 이상 수정하실 수 없습니다.');
    }

    setSelectedQuestion(target);
    toggleUpdateModal();
  };

  const dropdownItems = [
    {
      content: '수정하기',
      color: '#111',
      onClickListener: handleUpdateQuestion,
    },
    {
      content: '삭제하기',
      color: '#f45452',
      onClickListener: handleRemoveQuestion,
    },
  ];

  return (
    <S.MyQuestions ref={topRef} className="pagination-scroll-top">
      <Title level={5}>내 문의</Title>
      <PanelWrapper>
        {!!questions.length ? (
          <Collapse
            headers={MY_QUESTION_HEADER}
            items={questions}
            noSecret={true}
            dropdownItems={dropdownItems}
            gaps="1fr 1fr 3fr 1fr 1fr"
          />
        ) : (
          <Thung
            title="아직 작성된 문의가 없어요..!"
            className="thung-review"
          />
        )}

        <Pagination
          handleOnClickPage={handleOnClickPage}
          count={Math.ceil(count / QUESTION_LIMIT)}
        />

        {isOpenRemoveModal && (
          <DeleteConfirmModal
            removeSelected={handleRemoveOnQuestion}
            toggleModal={toggleRemoveModal}
          />
        )}

        {isOpenUpdateModal && (
          <RequestUpdateModal
            selected={seletedQuestion}
            toggleModal={toggleUpdateModal}
          />
        )}
      </PanelWrapper>
    </S.MyQuestions>
  );
};

export default MyQuestions;
