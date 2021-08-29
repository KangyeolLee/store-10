import React, { useCallback, useState } from 'react';
import Button from '@/components/Shared/Button';
import { Input } from '@/components/Shared/Input';
import Title from '@/components/Shared/Title';
import ModalLayout from '../ModalLayout';
import * as S from '../styles';
import { Textarea } from '@/components/Shared/Input';
import Form from '@/components/Shared/Form';
import CategorySelector from '@/components/CategorySelector';
import { useParams } from '@/lib/Router';
import Checkbox from '@/components/Shared/Checkbox';
import { useCreateQuestion } from '@/hooks/queries/product';
import { validateQuestion } from '@/utils/validator';

interface RequestModalProps {
  toggleModal: () => void;
  selected?: number;
}

const RequestModal = ({ toggleModal, selected }: RequestModalProps) => {
  const { id } = useParams().params;
  const [category, setCategory] = useState('상품');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [secret, setSecret] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const { mutate } = useCreateQuestion();

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isPass = validateQuestion({
      content,
      title,
      setTitleError,
      setContentError,
    });

    if (!isPass) return;

    const question = {
      product_id: id ?? selected,
      category,
      title,
      content,
      secret,
    };

    mutate(question);

    toggleModal();
  };

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
            <CategorySelector setCategory={setCategory} />
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

          <div style={{ marginTop: '2rem' }} className="input-wrapper">
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

export default RequestModal;
