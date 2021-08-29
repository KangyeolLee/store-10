import React from 'react';
import Portal from '@/components/Shared/Modal/Portal';
import { CloseSVG } from '@/assets/svgs';
import * as S from './styles';

interface CustomModalProps {
  children: React.ReactNode;
  toggleModal: () => void;
  className?: string;
  width?: string;
  height?: string;
  fullWidth?: boolean;
  compact?: boolean;
  onClick?: () => void;
}

const CustomModal = ({
  children,
  toggleModal,
  className,
  width,
  height,
  fullWidth,
  compact,
  onClick,
}: CustomModalProps) => {
  return (
    <Portal>
      <S.ModalOverlay className={className} onClick={onClick}>
        <S.ModalWrapper
          width={width}
          height={height}
          fullWidth={fullWidth}
          compact={compact}
          onClick={(e) => e.stopPropagation()}
        >
          <S.ModalInner>
            <S.ModalCloseButton onClick={toggleModal}>
              <CloseSVG width={25} height={25} stroke="#111" />
            </S.ModalCloseButton>
            {children}
          </S.ModalInner>
        </S.ModalWrapper>
      </S.ModalOverlay>
    </Portal>
  );
};

export default CustomModal;
