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
        <div className="containerForm" id="container">
          <div className="form-container sign-up-container">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" class="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            {children}
          </div>
          <div class="form-container sign-in-container">
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            {children}
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        {children}
        {/* <br />
        <button onClick={onClose}>Close</button> */}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
