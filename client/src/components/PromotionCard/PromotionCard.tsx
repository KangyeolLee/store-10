import { useHistory } from '@/lib/Router';
import * as React from 'react';
import * as S from './styles';
import Image from '@/components/Shared/Image';

const PromotionCard = () => {
  const { historyPush } = useHistory();
  const cardClickHandler = (text: string) => {
    historyPush(`/search/${text}`);
  };

  const CONTENTS = [
    {
      img: 'https://store-10.s3.ap-northeast-2.amazonaws.com/banner/promotion-1.png',
      title: '다이어리',
      content: `2021년 하반기\n기록을 시작해봐요`,
    },
    {
      img: 'https://store-10.s3.ap-northeast-2.amazonaws.com/banner/promotion-2.png',
      title: '독서대',
      content: `당신의 책읽기\n책임지겠습니다.`,
    },
  ];

  return (
    <S.PromotionWrap>
      {CONTENTS.map((item, idx) => (
        <S.PromotionCard
          key={'promotion_' + idx}
          onClick={() => cardClickHandler(item.title)}
        >
          <Image src={item.img} alt="프로모션 배너 이미지" />
          <S.PromotionText>
            <S.PromotionTitle>{item.title}</S.PromotionTitle>
            <S.PromotionContent>
              <pre>{item.content}</pre>
            </S.PromotionContent>
          </S.PromotionText>
        </S.PromotionCard>
      ))}
    </S.PromotionWrap>
  );
};

export default PromotionCard;
