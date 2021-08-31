import React, { useState, useEffect, useRef } from 'react';
import Chip from '@/components/Shared/Chip';
import Pagination from '@/components/Shared/Pagination';
import * as S from './styles';
import { ORDER_STATUS_DATA, PERIOD_FILTER } from '@/contstants';
import OrderItemList from './OrderItemList';
import { useGetOrders } from '@/hooks/queries/order';
import usePagination from '@/hooks/usePagination';
import { IOrder } from '@/types';
import Thung from '@/components/Thung';
import { PAGE_LIMIT } from '@/utils/constant/offsetLimit';
import useModal from '@/hooks/useModal';
import { RequestModal, ReviewModal } from '@/components/Shared/Modal';
import DeliveryModal from '@/components/Shared/Modal/DeliveryModal';
import useMission from '@/hooks/useMission';

const OrderHistory = ({}) => {
  const topRef = useRef<HTMLDivElement>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [offset, handleOnClickPage] = usePagination(PAGE_LIMIT, topRef);
  const [isOpenReviewModal, toggleReviewModal] = useModal(false);
  const [isOpenQuestionModal, toggleQuestionModal] = useModal(false);
  const [isOpenDeliveryModal, toggleDeliveryModal] = useModal(false);
  const [seletedReview, setSelectedReview] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedOrderId, setSelectedOrderId] = useState(0);
  const [_, setMissionList] = useMission();
  const { data } = useGetOrders(selectedPeriod);

  useEffect(() => {
    if (selectedStatus) {
      const filteredOrders =
        data?.filter((order) => order.status === selectedStatus) || [];
      setOrders(filteredOrders);
    } else {
      setOrders(data || []);
    }
  }, [data, selectedStatus, handleOnClickPage]);

  useEffect(() => {
    handleOnClickPage(0, true);
    if (selectedStatus) {
      setMissionList('orderHistoryFilter', true);
    }
  }, [selectedStatus, handleOnClickPage, setMissionList]);

  const handleOnClickItemReview = (target: number) => {
    setSelectedReview(target);
    toggleReviewModal();
  };

  const handleOnClickItemQuestion = (target: number) => {
    setSelectedQuestion(target);
    toggleQuestionModal();
  };

  const handleOnClieItemDelivery = (target: number) => () => {
    setSelectedOrderId(target);
    setMissionList('checkDelivery', true);
    toggleDeliveryModal();
  };

  const renderOrderItemList = () => {
    const ordersOnPage = orders.slice(offset, offset + PAGE_LIMIT);
    return ordersOnPage.map((order) => (
      <S.OrderHistoryBody key={order.id}>
        <OrderItemList
          date={order.createdAt}
          items={order.products}
          status={order.status}
          deliveredAt={order.deliveredAt}
          clickOnReviewListener={handleOnClickItemReview}
          clickOnQuestionListener={handleOnClickItemQuestion}
          clickOnDeliveryListener={handleOnClieItemDelivery(order.id)}
        />
      </S.OrderHistoryBody>
    ));
  };

  const renderPeriodFilter = () => {
    return PERIOD_FILTER.map((period) => (
      <Chip
        key={period.value}
        className={period.value === selectedPeriod ? 'selected' : undefined}
        onClick={() => setSelectedPeriod(period.value)}
      >
        {period.name}
      </Chip>
    ));
  };

  const renderOrderStatuList = () => {
    return ORDER_STATUS_DATA.map((status) => {
      const isSelected = status.value === selectedStatus;
      const count =
        data?.filter((order) => order.status === status.value)?.length || 0;
      return (
        <S.OrderStatusWrapper key={status.value}>
          <S.OrderStatusName
            onClick={() => setSelectedStatus(isSelected ? null : status.value)}
          >
            {status.name}
          </S.OrderStatusName>
          <S.OrderStatus
            isSelected={isSelected}
            onClick={() => setSelectedStatus(isSelected ? null : status.value)}
          >
            {count}
          </S.OrderStatus>
        </S.OrderStatusWrapper>
      );
    });
  };

  return (
    <S.OrerHistory ref={topRef} className="pagination-scroll-top">
      <S.OrderHistoryHeader>
        <S.OrderPeriodWrapper>
          {/* <Title level={5}>조회 기간</Title> */}
          {renderPeriodFilter()}
        </S.OrderPeriodWrapper>
        <S.OrderStatusContainer>
          {renderOrderStatuList()}
        </S.OrderStatusContainer>
      </S.OrderHistoryHeader>
      <div>
        {!!data?.length && renderOrderItemList()}
        {data && !orders.length && <Thung title="" />}
      </div>

      <Pagination
        handleOnClickPage={handleOnClickPage}
        count={Math.ceil(orders.length / PAGE_LIMIT)}
        offset={offset}
      />

      {isOpenReviewModal && (
        <ReviewModal selected={seletedReview} toggleModal={toggleReviewModal} />
      )}
      {isOpenQuestionModal && (
        <RequestModal
          selected={selectedQuestion}
          toggleModal={toggleQuestionModal}
        />
      )}
      {isOpenDeliveryModal && (
        <DeliveryModal
          selectedOrderId={selectedOrderId}
          toggleModal={toggleDeliveryModal}
        />
      )}
    </S.OrerHistory>
  );
};

export default OrderHistory;
