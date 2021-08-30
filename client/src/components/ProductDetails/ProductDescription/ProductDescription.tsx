import React, { useState } from 'react';
import * as S from '../styles';
import { useParams } from '@/lib/Router';
import Title from '@/components/Shared/Title';
import { nanoid } from 'nanoid';
import { useGetProductById } from '@/hooks/queries/product';
import contentParser from '@/utils/contentParser';
import { ResponseError } from '@/components/Shared/Error';
import Spinner from '@/components/Shared/Spinner';
import Image from '@/components/Shared/Image';
import useMission from '@/hooks/useMission';

const ProductDescription = () => {
  const { id } = useParams().params;
  const [isLoaded, setIsLoaded] = useState(false);
  const { data, isLoading, error } = useGetProductById(id);
  const [_, setMissionList] = useMission();

  if (error) {
    return <ResponseError message={error.message} />;
  }

  if (isLoading || !data) {
    return (
      <S.LoadingWrapper>
        <Spinner />
      </S.LoadingWrapper>
    );
  }

  const handleOnClickMoreButton = () => {
    setMissionList('moreDescription', true);
    setIsLoaded(true);
  };

  const { content } = data.details;
  const { details, essentials } = content;
  const [images, tables] = contentParser({ details, essentials });
  const imageFiles = images.filter((image) => image !== 'NO-IMAGE');

  return (
    <S.PanelWrapper>
      <Title level={5} className="title">
        상품 상세정보
      </Title>

      <S.ProductTable>
        {tables.map((table) => (
          <S.ProductTableRow key={nanoid()}>
            <div className="table-title">{table.title}</div>
            <span>{table.description}</span>
          </S.ProductTableRow>
        ))}
      </S.ProductTable>

      {imageFiles.length > 0 ? (
        <S.ProductImageDetails className={isLoaded ? 'open' : ''}>
          {imageFiles.map((image) => {
            return (
              <Image key={nanoid()} src={image} alt="상품 상세정보 이미지" />
            );
          })}
          {!isLoaded && (
            <S.LoadMoreImageButton onClick={handleOnClickMoreButton}>
              더보기
            </S.LoadMoreImageButton>
          )}
        </S.ProductImageDetails>
      ) : (
        <S.PreparingWrapper>
          <Image
            src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/baemin_ddam.gif"
            alt="상품 준비중 이미지"
          />
          <S.PreparingText>
            해당 상품 이미지를 아직 준비중에 있어요...
          </S.PreparingText>
        </S.PreparingWrapper>
      )}
    </S.PanelWrapper>
  );
};

export default ProductDescription;
