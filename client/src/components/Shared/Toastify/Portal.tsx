import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const toastRoot = document.getElementById('toastify-root') as HTMLElement;
  return ReactDOM.createPortal(children, toastRoot);
};

export default Portal;
