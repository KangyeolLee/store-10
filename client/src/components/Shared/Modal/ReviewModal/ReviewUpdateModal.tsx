import React, { useEffect, useState } from 'react';
import { RatingSetter } from '@/components/Shared/Rating';
import Title from '@/components/Shared/Title';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';
import * as S from '../styles';
import Button from '@/components/Shared/Button';
import { FileInput, Textarea } from '@/components/Shared/Input';
import useFileInput from '@/hooks/useFileInput';
import Form from '@/components/Shared/Form';
import { useDeleteReviewImage, useUpdateReview } from '@/hooks/queries/product';
import { validateReview } from '@/utils/validator';
import { compressImageFile } from '@/utils/helper';
import { useGetSelectedReviewById } from '@/hooks/queries/product/index';
import useMission from '@/hooks/useMission';

interface ReviewModalProps {
  toggleModal: () => void;
  selected: number;
}

// TODO: Input 타입을 조금 더 만들어야 하겠군뇨 호호호

const ReviewUpdateModal = ({ toggleModal, selected }: ReviewModalProps) => {
  const { data: review, isLoading, error } = useGetSelectedReviewById(selected);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [S3Preview, setS3Preview] = useState<string[]>([]);
  const [contentError, setContentError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMissionList] = useMission();
  const { mutate: updateReview } = useUpdateReview();
  const { mutate: deleteReviewPreview } = useDeleteReviewImage();
  const {
    fileRef,
    imgFiles,
    isError,
    handleClickOnFileInput,
    handleUploadFile,
    removeSeletedPreview,
  } = useFileInput();

  useEffect(() => {
    setRating(review?.rating ?? 0);
    setContent(review?.content ?? '');
    setS3Preview(review?.url ?? []);
  }, [review?.content, review?.rating, review?.url]);

  // 이 부분에 대한 공통 화면도 만들 수 있다면 좋을 거 같네요~
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading || !review) {
    return <div>loading</div>;
  }

  const handleOnRating = (rating: number) => {
    setRating(rating);
  };

  const handleOnTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e;
    setContent(target.value);
  };

  const removeS3Preview = (e: React.MouseEvent, target: string) => {
    e.preventDefault();

    const removed = S3Preview.filter((preview) => preview !== target);
    deleteReviewPreview({ id: review.id, url: target });
    setS3Preview(removed);
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

    updateReview({ id: review.id, data: formData });

    setMissionList('updateReview', true);
    toggleModal();
  };

  return (
    <ModalLayout toggleModal={toggleModal}>
      <S.ModalHeader>상품후기 수정</S.ModalHeader>
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
              value={rating}
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
              S3Previews={S3Preview}
              isError={isError}
              handleClickOnFileInput={handleClickOnFileInput}
              handleUploadFile={handleUploadFile}
              removeSeletedPreview={removeSeletedPreview}
              removeS3Preview={removeS3Preview}
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

export default ReviewUpdateModal;
