import React from 'react';
import { Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Portal from './Portal';
import * as S from './styles';

const ToastifyContainer = () => {
  return (
    <Portal>
      <S.StyledToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        transition={Slide}
      />
    </Portal>
  );
};

export default ToastifyContainer;
