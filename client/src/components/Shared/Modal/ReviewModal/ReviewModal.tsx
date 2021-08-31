import React, { useState } from 'react';
import { RatingSetter } from '@/components/Shared/Rating';
import Title from '@/components/Shared/Title';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';
import * as S from '../styles';
import Button from '@/components/Shared/Button';
import { FileInput, Textarea } from '@/components/Shared/Input';
import useFileInput from '@/hooks/useFileInput';
import Form from '@/components/Shared/Form';
import { useCreateReview } from '@/hooks/queries/product';
import { useParams } from '@/lib/Router';
import { validateReview } from '@/utils/validator';
import { compressImageFile } from '@/utils/helper';
import useMission from '@/hooks/useMission';

interface ReviewModalProps {
  toggleModal: () => void;
  selected?: number;
}

// TODO: Input 타입을 조금 더 만들어야 하겠군뇨 호호호

const ReviewModal = ({ toggleModal, selected }: ReviewModalProps) => {
  const { id } = useParams().params;
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMissionList] = useMission();
  const { mutate } = useCreateReview();
  const {
    fileRef,
    imgFiles,
    isError,
    handleClickOnFileInput,
    handleUploadFile,
    removeSeletedPreview,
  } = useFileInput();

  const handleOnRating = (rating: number) => {
    setRating(rating);
  };

  const handleOnTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e;
    setContent(target.value);
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isPass = validateReview({
      content,
      rating,
      setContentError,
      setRatingError,
    });

    if (!isPass) return;

    const files = Object.values(imgFiles);
    const formData = new FormData();
    for (const file of files) {
      formData.append('images', await compressImageFile(file));
    }
    formData.append('rating', rating.toString());
    formData.append('content', content);
    formData.append('product_id', id ?? selected);

    mutate(formData);

    setMissionList('createReview', true);
    toggleModal();
  };

  return (
    <ModalLayout toggleModal={toggleModal}>
      <S.ModalHeader>상품후기 작성</S.ModalHeader>
      <S.ModalDivider />
      <S.ModalBody>
        <Form onSubmit={handleOnSubmit} gap={3}>
          <div className="input-wrapper">
            <Title className="sub-title" level={5}>
              별점 매기기
            </Title>
            <RatingSetter
              helpertext="별점을 매겨주세요!"
              error={ratingError}
              handleOnRating={handleOnRating}
            />
          </div>
          <Title className="sub-title" level={5}>
            사진 업로드 (최대 3장)
          </Title>

          <div className="input-wrapper">
            <FileInput
              fileRef={fileRef}
              name="image-uploader"
              imgFiles={imgFiles}
              isError={isError}
              handleClickOnFileInput={handleClickOnFileInput}
              handleUploadFile={handleUploadFile}
              removeSeletedPreview={removeSeletedPreview}
              hidden
            />
          </div>

          <div className="input-wrapper">
            <Title className="sub-title" level={5}>
              리뷰 남기기
            </Title>
            <Textarea
              placeholder="다른 구매자와 판매자에게 도움이 될 수 있도록 자세하고 솔직하게 리뷰 작성 부탁드려요!"
              resize="vertical"
              name="review-content"
              value={content}
              onChange={handleOnTextarea}
              error={contentError}
              helpertext="내용을 입력해주세요!"
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

export default ReviewModal;
