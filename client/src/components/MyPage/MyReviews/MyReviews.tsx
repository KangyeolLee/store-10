import {
  PanelWrapper,
  ReviewImages,
  UserDescription,
  UserReview,
  UserReviewArea,
  UserReviewTitles,
} from '@/components/ProductDetails/styles';
import React, { useRef, useState } from 'react';
import * as S from './styles';
import Title from '@/components/Shared/Title';
import { RatingGetter } from '@/components/Shared/Rating';
import { dateFormat } from '@/utils/helper';
import { nanoid } from 'nanoid';
import {
  useDeleteReview,
  useGetProductReviewsByUser,
} from '@/hooks/queries/product/index';
import usePagination from '@/hooks/usePagination';
import { REVIEW_LIMIT } from '@/utils/constant/offsetLimit';
import Pagination from '@/components/Shared/Pagination';
import {
  DeleteConfirmModal,
  ReviewImageModal,
  ReviewUpdateModal,
} from '@/components/Shared/Modal';
import useModal from '@/hooks/useModal';
import { Link } from '@/lib/Router';
import Dropdown from '@/components/Shared/Dropdown';
import Thung from '@/components/Thung';
import { ReviewSkeleton } from '@/components/Skeleton/ProductSkeleton';

const MyReviews = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const [offset, handleOnClickPage] = usePagination(REVIEW_LIMIT, topRef);
  const { data, isLoading, error } = useGetProductReviewsByUser(offset);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedReview, setSelectedReview] = useState(0);
  const [isImageOpen, toggleImageModal] = useModal(false);
  const [isOpen, toggleModal] = useModal(false);
  const [isUpdateModalOpen, toggleUpdateModal] = useModal(false);
  const { mutate } = useDeleteReview();

  // 이 부분에 대한 공통 화면도 만들 수 있다면 좋을 거 같네요~
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading || !data) {
    return <ReviewSkeleton />;
  }

  const handleRemoveReview = (target: number) => {
    setSelectedReview(target);
    toggleModal();
  };

  const handleUpdateReview = (target: number) => {
    setSelectedReview(target);
    toggleUpdateModal();
  };

  const dropdownItems = [
    { content: '수정하기', color: '#111', onClickListener: handleUpdateReview },
    {
      content: '삭제하기',
      color: '#f45452',
      onClickListener: handleRemoveReview,
    },
  ];

  const handleOnClickImage = (image: string) => {
    setSelectedImage(image);
    toggleImageModal();
  };

  const removeSelectedReview = () => {
    mutate(selectedReview);
    toggleModal();
  };

  const { reviews, count } = data;

  return (
    <S.MyReviews ref={topRef} className="pagination-scroll-top">
      <Title level={5}>내 리뷰</Title>

      <PanelWrapper>
        <UserReviewArea>
          {!!reviews.length ? (
            reviews.map((review) => {
              return (
                <S.MyReviewsItem key={review.id}>
                  <S.Title>리뷰번호: #{review.id}</S.Title>
                  <div className="review-wrapper">
                    <S.ThumbnailArea>
                      <S.ProductThumbnail
                        src={review.productImage_url}
                        alt="상품 섬네일"
                      />
                      <Link to={`/detail/${review.product_id}`}>
                        <S.LinkButton>이동</S.LinkButton>
                      </Link>
                    </S.ThumbnailArea>
                    <UserReview data-review-id={review.id}>
                      <UserReviewTitles>
                        <S.ReviewTitleArea>
                          <Title className="username" level={5}>
                            {review.name}
                            <span style={{ fontWeight: 100 }}>님</span>
                          </Title>
                          <Dropdown
                            selectedId={review.id}
                            items={dropdownItems}
                          />
                        </S.ReviewTitleArea>
                        <div className="rating-area">
                          <RatingGetter
                            rating={review.rating}
                            uniqueId={nanoid()}
                          />
                          <p className="date">{dateFormat(review.createdAt)}</p>
                        </div>
                      </UserReviewTitles>

                      {review.url.length !== 0 && (
                        <ReviewImages>
                          {review.url.map((image) => (
                            <img
                              onClick={() => handleOnClickImage(image)}
                              key={nanoid()}
                              src={image}
                              alt="유저사진리뷰"
                            />
                          ))}
                        </ReviewImages>
                      )}

                      <UserDescription>{review.content}</UserDescription>
                    </UserReview>
                  </div>
                </S.MyReviewsItem>
              );
            })
          ) : (
            <Thung
              title="아직 작성된 리뷰가 없어요..!"
              className="thung-review"
            />
          )}
        </UserReviewArea>

        <Pagination
          handleOnClickPage={handleOnClickPage}
          count={Math.ceil(count / REVIEW_LIMIT)}
        />

        {isImageOpen && (
          <ReviewImageModal
            selectedImage={selectedImage}
            toggleModal={toggleImageModal}
          />
        )}

        {isOpen && (
          <DeleteConfirmModal
            removeSelected={removeSelectedReview}
            toggleModal={toggleModal}
          />
        )}

        {isUpdateModalOpen && (
          <ReviewUpdateModal
            selected={selectedReview}
            toggleModal={toggleUpdateModal}
          />
        )}
      </PanelWrapper>
    </S.MyReviews>
  );
};

export default MyReviews;
