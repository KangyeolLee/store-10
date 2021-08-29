import { AlertSVG } from '@/assets/svgs';
import Title from '@/components/Shared/Title';
import React from 'react';
import * as S from '../styles';

const ProductDelivery = () => {
  return (
    <S.PanelWrapper>
      <Title level={5} className="title">
        배송안내
      </Title>
      {/* Table Outlined 도 만들어주쎄요 징징징 일단을 className으로 해결하게씁니다 */}
      <table className="custom-table">
        <tbody>
          <tr>
            <th>배송사</th>
            <td>CJ 대한통운</td>
          </tr>
          <tr>
            <th>배송비</th>
            <td>2,500원 (3만원 이상 구매 시 무료배송)</td>
          </tr>
          <tr>
            <th>배송기간</th>
            <td>오후 2시 이전 결제완료시 당일 출고 (영업일 기준)</td>
          </tr>
        </tbody>
      </table>

      <S.AlertArea>
        <S.AlertIcon>
          <AlertSVG />
        </S.AlertIcon>
        <div className="alert-message-wrapper">
          <S.AlertMessage>
            단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로
            소요될 수 있는 점 양해 부탁드립니다.
          </S.AlertMessage>
          <S.AlertMessage>
            도서, 산간 일부지역은 배송비가 추가될 수 있습니다.{' '}
          </S.AlertMessage>
        </div>
      </S.AlertArea>
    </S.PanelWrapper>
  );
};

export default ProductDelivery;
