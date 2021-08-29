import { useState } from 'react';

const useModal = (defaultState: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultState);
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, toggleModal] as const;
};

export default useModal;
