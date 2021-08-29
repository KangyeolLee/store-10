import Title from '@/components/Shared/Title';
import React from 'react';
import * as S from '../styles';
import { AlertSVG } from '@/assets/svgs';

const ProductExchange = () => {
  // 하드코딩 오졌다리...
  // ProductDetails 하위 컴포넌트 중 Delivery와 Exchange의 경우 형태가 동일하니깐
  // 이 부분은 따로 상위에 스타일드 컴포넌트 정의해서 공통으로 사용하도록 변경하면 될 거 같습니다.
  // 별도로 props를 전달받아 사용할 수 있도록 컴포넌트 단위로 분리할 지도 고민이 되는군요..
  // 근데 우리 스타일드 컴포넌트 그래서 분리 하나요?? ㅋㅋㅋ

  return (
    <S.PanelWrapper>
      <Title level={5} className="title">
        교환 및 반품 안내
      </Title>

      {/* Table Outlined 도 만들어주쎄요 징징징 일단을 className으로 해결하게씁니다 */}
      <table className="custom-table">
        <tbody>
          <tr>
            <th className="mobile-only">
              <span>교환/반품</span>
              <span>배송비</span>
            </th>
            <td>5,000원 (단순변심의 경우)</td>
          </tr>
          <tr>
            <th>반송지</th>
            <td>
              반송지 : 우)10846 경기 파주시 탄현면 축현리 241-4 배민문방구
              물류센터
            </td>
          </tr>
        </tbody>
      </table>

      <ul className="exchange-notice">
        <li className="notice-item">
          주문 취소 및 배송지 변경은 “결제완료” 단계에서만 가능합니다.
        </li>
        <li className="notice-item">
          주문은 마이페이지에서 취소 또는 변경하실 수 있습니다.
        </li>
        <li className="notice-item">
          “상품준비중“ 단계에서는 주문 취소 및 배송지 변경이 불가합니다.
        </li>
        <li className="notice-item">
          교환 및 반품은 배송완료 후 7일 이내에 가능합니다.
        </li>
        <li className="notice-item">
          단, 재화 등의 내용이 표시, 광고 내용과 다르거나 계약내용을 다르게
          이행한 경우에는 재화 등을 공급받은 날로부터 3개월 이내, 그 사실을 안
          날 또는 알 수 있었던 날로부터 30일 이내에 교환 및 반품이 가능합니다.
        </li>
        <li className="notice-item">
          상품의 불량/하자 및 표시광고 및 계약 내용이 다른 경우 해당 상품의 회수
          비용은 무료입니다.
        </li>

        <S.AlertArea>
          <S.AlertIcon>
            <AlertSVG />
          </S.AlertIcon>
          <div className="alert-message-wrapper">
            <S.AlertMessage>
              단, 다음의 경우 교환 및 반품이 불가합니다.
            </S.AlertMessage>
            <S.AlertSmallMessage>
              - 구매자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우
            </S.AlertSmallMessage>
            <S.AlertSmallMessage>
              - 구매자의 사용 또는 일부 소비에 의해 재화 등의 가치가 현저히
              감소한 경우
            </S.AlertSmallMessage>
            <S.AlertSmallMessage>
              - 복제가 가능한 재화 등의 포장을 훼손한 경우(CD/DVD/GAME/도서의
              경우 포장 개봉 시)
            </S.AlertSmallMessage>
            <S.AlertSmallMessage>
              - 시간 경과에 의하여 재판매가 곤란할 정도로 상품의 가치가 현저히
              감소한 경우
            </S.AlertSmallMessage>
            <S.AlertSmallMessage>
              - 고객의 주문에 따라 개별 생산되는 상품의 경우
            </S.AlertSmallMessage>
          </div>
        </S.AlertArea>
      </ul>

      <Title level={5} className="title">
        환불안내
      </Title>
      <ul className="refund-notice">
        <li className="notice-item">
          주문취소 및 반품 시 환불은 주문 시 이용하신 결제수단으로 2~7 영업일
          이내 환불됩니다.
        </li>
      </ul>

      <Title level={5} className="title">
        AS안내
      </Title>
      <ul className="AS-notice">
        <li className="notice-item">
          제품에 문제가 있으신 경우, 배민문방구 고객센터로 접수해주시면 안내
          도와드리겠습니다.
        </li>
        <li className="notice-item">
          배민문방구에서 발생한 문제는 소비자분쟁해결 기준(공정거래위원회
          고시)에 따라 피해를 보상받을 수 있습니다.
        </li>
      </ul>
    </S.PanelWrapper>
  );
};

export default ProductExchange;
