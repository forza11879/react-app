import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const OVERLAY_STYLES = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
  border: 'solid red',
};

const MODAL_STYLES = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'Montserrat sans-serif',
  position: 'relative',
  background: '#f6f5f7',
  // background: '#fff',
  padding: 20,
  // border: 'dashed red ',
};

function Modal({ children, onClose }) {
  // if (!open) return null;

  // componentDidMount() {
  //   document.addEventListener("click", this.closeModal, false);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("click", this.closeModal, false);
  // }
  let modalRef = useRef();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const closeModal = ({ target }) => {
      if (!modalRef.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', closeModal, false);

    // returned function will be called on component unmount
    return () => {
      document.removeEventListener('mousedown', closeModal, false);
    };
  });

  return ReactDOM.createPortal(
    <div style={OVERLAY_STYLES}>
      <div ref={modalRef} style={MODAL_STYLES}>
        {children}
        {/* <br />
        <button onClick={onClose}>Close</button> */}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
