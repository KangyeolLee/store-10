import React, { useEffect, useState } from 'react';
import * as S from './styles';
import ModalLayout from '../ModalLayout';
import { useUpdateOrder } from '@/hooks/queries/order';
import Spinner from '@/components/Shared/Spinner';
import { SelectedSVG } from '@/assets/svgs';
import { useQueryClient } from 'react-query';

interface IProps {
  toggleModal: () => void;
  selectedOrderId: number;
}
const DeliveryModal = ({ toggleModal, selectedOrderId }: IProps) => {
  const [imgeLoaded, setImgeLoaded] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const { mutate, isLoading } = useUpdateOrder();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (imgeLoaded) {
      setTimeout(() => {
        mutate(
          {
            order: {
              id: selectedOrderId,
              status: 'delivered',
              deliveredAt: new Date(),
            },
          },
          {
            onSuccess() {
              setDelivered(true);
              queryClient.invalidateQueries('orders');
            },
          }
        );
      }, 3000);
    }
  }, [imgeLoaded, mutate, selectedOrderId, queryClient]);

  return (
    <ModalLayout width="32rem" height="30rem" toggleModal={toggleModal}>
      {isLoading ? (
        <S.Wrapper>
          <Spinner />
        </S.Wrapper>
      ) : delivered ? (
        <S.Wrapper>
          <SelectedSVG width={80} height={80} />
          <span>때마침, 배달이 완료되었습니다.</span>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <img
            width={200}
            height={200}
            onLoad={() => {
              setImgeLoaded(true);
            }}
            src={`https://store-10.s3.ap-northeast-2.amazonaws.com/test/deliver.gif?${new Date().getTime()}`}
          />
        </S.Wrapper>
      )}
    </ModalLayout>
  );
};

export default DeliveryModal;
