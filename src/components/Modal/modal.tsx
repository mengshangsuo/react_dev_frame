import React, { ReactNode, ReactPortal, useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

function Modal(_props: any): ReactPortal | null {

  const [modalRoot, setModalRoot] = useState<any>(null);

  useEffect(() => {
    const target = document.querySelector('#modal-root');
    if (!target) {
      const modalContainer = document.createElement('div');
      modalContainer.id = 'modal-root';
      document.body.appendChild(modalContainer);
      setModalRoot(modalContainer);
      return;
    }

    setModalRoot(target);
    return () => {
    }
  }, []);

  return modalRoot ? ReactDOM.createPortal(
    _props.children,
    modalRoot
  ) : null;
}

Modal.useModal = 'useModal';

export default Modal
