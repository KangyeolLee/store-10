import ReactDOM from 'react-dom';
import { useEffect } from 'react';

interface PortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  // 모달 오픈 시 브라우저 스크롤 제거 및 복구
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      overflow-y: scroll; 
      top: -${window.scrollY}px;
      width: 100%;
    `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = ``;
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
};

export default Portal;
