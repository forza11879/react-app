import React from 'react';
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
};

const MODAL_STYLES = {
  padding: 20,
  background: '#fff',
  borderRadius: '2px',
  display: 'inline-block',
  minHeight: '300px',
  margin: '1rem',
  position: 'relative',
  minWidth: '300px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  justifySelf: 'center',
};

function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div style={OVERLAY_STYLES} /*onClick={onClose}*/>
      <div style={MODAL_STYLES}>
        {children}
        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
