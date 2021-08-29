import React, { useRef, useState } from 'react';
import * as S from '../styles';
import { IThumbnails } from '@/types';
import {
  calculatePos,
  adjustLenserBoxStyles,
  adjustZoomPostionStyles,
  adjustZoomBoxStyles,
} from './zoomLense';

interface IProductThumbnails {
  thumbDetails: IThumbnails[];
  thumbOrigins: IThumbnails[];
  thumbThumbnails: IThumbnails[];
}

const ProductThumbnails = ({
  thumbDetails,
  thumbOrigins,
  thumbThumbnails,
}: IProductThumbnails) => {
  const [selectedThumbnail, setSelectedThumbnail] = useState(thumbDetails[0]);
  const [originImg, setOriginImg] = useState(thumbOrigins[0]);
  const [isLensed, setIsLensed] = useState(false);
  const lenser = useRef<HTMLDivElement>(null);
  const zoomedImg = useRef<HTMLDivElement>(null);

  const handleChangeThmbnail = (targetId: string) => {
    const thumb = thumbDetails.filter((detail) => detail.targetId === targetId);
    const origin = thumbOrigins.filter(
      (origin) => origin.targetId === targetId
    );
    setSelectedThumbnail(thumb[0]);
    setOriginImg(origin[0]);
  };

  const handleOnMousemove = (e: React.MouseEvent) => {
    const lenserBox = lenser.current;
    const zoomedBox = zoomedImg.current;
    const target = e.currentTarget;

    !isLensed && handleOnMuseover(zoomedBox, target);

    if (lenserBox && zoomedBox) {
      const { posX, posY, ratioX, ratioY } = calculatePos({
        clientX: e.clientX,
        clientY: e.clientY,
        target,
        lenserBox,
      });

      adjustLenserBoxStyles(lenserBox, posX, posY);
      adjustZoomPostionStyles(zoomedBox, posX * ratioX, posY * ratioY);
    }
  };

  const handleOnMuseover = (
    zoomedBox: HTMLDivElement | null,
    target: EventTarget & Element
  ) => {
    const { width, height } = target.getBoundingClientRect();

    if (zoomedBox) {
      adjustZoomBoxStyles(zoomedBox, width, height);
    }

    setIsLensed(true);
  };

  return (
    <S.ProductThumbnailArea>
      <S.ProductThumbnail
        src={selectedThumbnail.url}
        alt="상품 섬네일 이미지"
        onMouseMove={(e) => handleOnMousemove(e)}
        onMouseLeave={() => setIsLensed(false)}
      />
      {isLensed && (
        <S.ProductLenseSelector
          className="on_tablet_resolution"
          ref={lenser}
        ></S.ProductLenseSelector>
      )}
      <S.ProductThumbnailLense
        className="on_tablet_resolution"
        ref={zoomedImg}
        imgset={originImg.url}
        show={isLensed}
      ></S.ProductThumbnailLense>

      <S.ProductPreviewArea>
        {thumbThumbnails.map((thumb) => (
          <S.ProductPreviewThumbnail
            className={
              thumb.targetId === selectedThumbnail.targetId ? 'selected' : ''
            }
            onClick={() => handleChangeThmbnail(thumb.targetId)}
            key={thumb.id}
            src={thumb.url}
            alt="상품 섬네일 미리보기"
          />
        ))}
      </S.ProductPreviewArea>
    </S.ProductThumbnailArea>
  );
};

export default ProductThumbnails;
