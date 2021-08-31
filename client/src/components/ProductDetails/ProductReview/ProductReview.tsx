import { RatingGetter } from '@/components/Shared/Rating';
import RatingChart from '@/components/Shared/RatingChart';
import Title from '@/components/Shared/Title';
import React, { useRef, useState } from 'react';
import * as S from '../styles';
import Button from '@/components/Shared/Button';
import useModal from '@/hooks/useModal';
import { ReviewModal, ReviewImageModal } from '@/components/Shared/Modal';
import { useParams } from '@/lib/Router';
import {
  useGetProductReviewsById,
  useGetProductReviewsCount,
} from '@/hooks/queries/product';
import { nanoid } from 'nanoid';
import { calculateRating, dateFormat } from '@/utils/helper';
import Pagination from '@/components/Shared/Pagination';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import { notify } from '@/components/Shared/Toastify';
import usePagination from '@/hooks/usePagination';
import { REVIEW_LIMIT } from '@/utils/constant/offsetLimit';
import Thung from '@/components/Thung';
import { ResponseError } from '@/components/Shared/Error';
import { ReviewSkeleton } from '@/components/Skeleton/ProductSkeleton/';
import { getOrderByProductId } from '@/lib/api/order';
import useMission from '@/hooks/useMission';

// 페이지 당 리뷰 노출 개수

const ProductReview = () => {
  const { id } = useParams().params;
  const topRef = useRef<HTMLDivElement>(null);
  const [offset, handleOnClickPage] = usePagination(REVIEW_LIMIT, topRef);
  const [selectedImage, setSelectedImage] = useState('');
  const [isReviewOpen, toggleReviewModal] = useModal(false);
  const [isImageOpen, toggleImageModal] = useModal(false);
  const [user] = useRecoilState(userState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMissionList] = useMission();

  const {
    data: reviews,
    isLoading,
    error,
  } = useGetProductReviewsById(id, offset);
  const { data: scores } = useGetProductReviewsCount(id);

  // 이 부분에 대한 공통 화면도 만들 수 있다면 좋을 거 같네요~
  if (error) {
    return <ResponseError message={error.message} />;
  }

  if (isLoading || !reviews || !scores) {
    return <ReviewSkeleton />;
  }

  const { count, sum, ratings } = scores;
  const rating = calculateRating({ sum, count });

  const handleClickReviewButton = async () => {
    if (!user) {
      return notify('error', '로그인 후 작성 가능합니다.');
    }

    const { ordered } = await getOrderByProductId(+id);
    if (!ordered) {
      return notify('error', '리뷰는 상품 구매 후 작성 가능해요!');
    }

    toggleReviewModal();
  };

  const handleOnClickImage = (image: string) => {
    setSelectedImage(image);
    setMissionList('imageView', true);
    toggleImageModal();
  };

  return (
    <S.PanelWrapper ref={topRef} className="pagination-scroll-top">
      <S.TopArea>
        <Title className="title" level={5}>
          상품후기 ({count})
        </Title>
        <Button
          size="Default"
          color="primary"
          type="button"
          onClick={handleClickReviewButton}
        >
          작성하기
        </Button>
      </S.TopArea>

      <S.RatingArea>
        {!!reviews.length ? (
          <>
            <S.StarRates>
              <span className="totalRates">{rating}</span>
              <RatingGetter rating={rating} uniqueId="totalRating" />
            </S.StarRates>
            <RatingChart total={count} ratings={ratings} />
          </>
        ) : (
          <S.NoDataText>아직 매겨진 별점이 없네요..!</S.NoDataText>
        )}
      </S.RatingArea>

      <S.UserReviewArea>
        {!!reviews.length ? (
          reviews.map((review) => {
            return (
              <S.UserReview data-review-id={review.id} key={review.id}>
                <S.UserReviewTitles>
                  <Title className="username" level={5}>
                    {review.name}
                    <span style={{ fontWeight: 100 }}>님</span>
                  </Title>
                  <div className="rating-area">
                    <RatingGetter rating={review.rating} uniqueId={nanoid()} />
                    <p className="date">{dateFormat(review.createdAt)}</p>
                  </div>
                </S.UserReviewTitles>

                {review.url.length !== 0 && (
                  <S.ReviewImages>
                    {review.url.map((image) => (
                      <img
                        onClick={() => handleOnClickImage(image)}
                        key={nanoid()}
                        src={image}
                        alt="유저사진리뷰"
                      />
                    ))}
                  </S.ReviewImages>
                )}

                <S.UserDescription>{review.content}</S.UserDescription>
              </S.UserReview>
            );
          })
        ) : (
          <Thung
            title="아직 작성된 리뷰가 없어요..!"
            className="thung-review"
          />
        )}
      </S.UserReviewArea>

      <Pagination
        handleOnClickPage={handleOnClickPage}
        count={Math.ceil(count / REVIEW_LIMIT)}
      />

      {isReviewOpen && <ReviewModal toggleModal={toggleReviewModal} />}
      {isImageOpen && (
        <ReviewImageModal
          selectedImage={selectedImage}
          toggleModal={toggleImageModal}
        />
      )}
    </S.PanelWrapper>
  );
};

export default ProductReview;
