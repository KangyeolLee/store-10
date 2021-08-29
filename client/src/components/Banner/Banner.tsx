import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import * as S from './styles';

const dummy = [
  {
    id: 'banner-image01',
    src: 'https://store-10.s3.ap-northeast-2.amazonaws.com/test/banner/banner1.gif',
  },
  {
    id: 'banner-image02',
    src: 'https://store-10.s3.ap-northeast-2.amazonaws.com/test/banner/banner2.gif',
  },
  {
    id: 'banner-image03',
    src: 'https://store-10.s3.ap-northeast-2.amazonaws.com/test/banner/banner3.gif',
  },
];

const Banner = () => {
  const renderIndicator = (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean
  ) => <S.Indicator onClick={clickHandler} isSelected={isSelected} />;

  return (
    <S.Carousel>
      <Carousel
        autoPlay
        infiniteLoop
        emulateTouch
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        renderIndicator={(clickHandler, isSelected) =>
          renderIndicator(clickHandler, isSelected)
        }
      >
        {dummy.map((d) => (
          <S.Banner key={d.id}>
            <img src={d.src} alt="배너이미지" />
          </S.Banner>
        ))}
      </Carousel>
    </S.Carousel>
  );
};

export default Banner;
