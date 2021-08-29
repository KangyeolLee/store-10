import React from 'react';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';

interface ReviewImageModalProps {
  toggleModal: () => void;
  selectedImage: string;
}

const ReviewImageModal = ({
  toggleModal,
  selectedImage,
}: ReviewImageModalProps) => {
  return (
    <ModalLayout fullWidth toggleModal={toggleModal}>
      <img src={selectedImage} alt="유저 리뷰 이미지" />
    </ModalLayout>
  );
};

export default ReviewImageModal;
