import React, { useState, useCallback, useEffect } from 'react';
import * as S from '../styles';
import ModalLayout from '../ModalLayout';
import Form from '@/components/Shared/Form';
import Title from '@/components/Shared/Title';
import CategorySelector from '@/components/CategorySelector';
import Checkbox from '@/components/Shared/Checkbox';
import { Input, Textarea } from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import { validateQuestion } from '@/utils/validator';
import {
  useGetSelectedQuestionById,
  useUpdateQuestion,
} from '@/hooks/queries/product';

interface RequestUpdateModalProps {
  toggleModal: () => void;
  selected: number;
}

const RequestUpdateModal = ({
  toggleModal,
  selected,
}: RequestUpdateModalProps) => {
  const {
    data: question,
    isLoading,
    error,
  } = useGetSelectedQuestionById(selected);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [secret, setSecret] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const { mutate } = useUpdateQuestion();

  useEffect(() => {
    setCategory(question?.category ?? '상품');
    setTitle(question?.title ?? '');
    setContent(question?.content ?? '');
  }, [question?.category, question?.title, question?.content]);

  const handleOnChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = e;

      setTitle(value);
    },
    []
  );

  const handleOnChangeContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const {
        target: { value },
      } = e;
      setContent(value);
    },
    []
  );

  const handleOnChangeSecret = useCallback(() => {
    setSecret((prev) => !prev);
  }, []);

  // 이 부분에 대한 공통 화면도 만들 수 있다면 좋을 거 같네요~
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading || !question) {
    return <div>loading</div>;
  }

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isPass = validateQuestion({
      content,
      title,
      setTitleError,
      setContentError,
    });

    if (!isPass) return;

    const newQuestion = {
      product_id: question.product_id,
      category,
      title,
      content,
      secret,
    };

    mutate({ id: question?.id ?? 0, data: newQuestion });

    toggleModal();
  };

  return (
    <ModalLayout toggleModal={toggleModal}>
      <S.ModalHeader>상품문의 작성</S.ModalHeader>
      <S.ModalDivider />
      <S.ModalBody>
        <Form onSubmit={handleOnSubmit} gap={2}>
          <div className="input-wrapper">
            <Title className="sub-title" level={5}>
              문의 유형
            </Title>
            <CategorySelector selected={category} setCategory={setCategory} />
          </div>
          <div className="input-wrapper">
            <Title className="sub-title" level={5}>
              비공개 여부
            </Title>
            <S.CheckboxWrapper>
              <Checkbox checked={secret} onChange={handleOnChangeSecret} />
              {secret
                ? '관리자/작성자만 열람 가능합니다.'
                : '모든 사람이 열람 가능합니다.'}
            </S.CheckboxWrapper>
          </div>

          <div className="input-wrapper custom-input">
            <Title className="sub-title" level={5}>
              문의 제목 (최대 50자)
            </Title>
            <Input
              fullWidth
              maxLength={50}
              value={title}
              onChange={handleOnChangeTitle}
              type="text"
              label="Outlined"
              error={titleError}
              name="request-title"
              helperAlign="right"
              helperText="문의제목을 필수로 입력해주세요..!"
              placeholder="문의 제목을 입력해주세요...!"
            />
          </div>

          <div className="input-wrapper">
            <Title className="sub-title" level={5}>
              문의 남기기
            </Title>
            <Textarea
              name="request-content"
              resize="vertical"
              value={content}
              error={contentError}
              onChange={handleOnChangeContent}
              helpertext="내용을 필수로 입력하셔야 합니다..!"
              placeholder="문의 내용을 입력해주세요...!"
              fullWidth
            />
          </div>

          <S.ModalButtonArea>
            <Button color="primary" type="submit" fullWidth>
              완료
            </Button>
          </S.ModalButtonArea>
        </Form>
      </S.ModalBody>
    </ModalLayout>
  );
};

export default RequestUpdateModal;
