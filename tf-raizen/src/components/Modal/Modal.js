import React from 'react';
import Button from '../Button/button.js';

import './Modal.scss';

export default function Modal({ children, hide, setHide, callback }) {
  const closeModal = () => {
    setHide({ show: false });
    if (callback !== undefined) callback();
  };
  if (hide === false) {
    return <></>;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="validation-message">{children}</p>
        <div>
          <Button className="close-modal" text="OK" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};
