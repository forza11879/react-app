import React, { useState } from 'react';
import Modal from '../../components/modal/modal.component';
import UserForm from '../../components/forms/form-multi-step-login/multi-step-login-form.component.jsx';

import './landing.styles.scss';

// const BUTTON_WRAPPER_STYLES = {
//   height: '100%',
//   display: 'grid',
//   justifyContent: 'center',
//   alignItems: 'center',
// };
function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModel = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  return (
    <div className="landing__header">
      <a className="logo__landing" href="/">
        Trading Platform
      </a>
      <nav>
        <ul className="nav__links">
          <li /*style={BUTTON_WRAPPER_STYLES}*/>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <a href="#">
        <button onClick={() => handleOpenModel()}>SignUp</button>
        {isOpen ? (
          <Modal onClose={() => handleCloseModal()}>
            <UserForm />
          </Modal>
        ) : null}
      </a>
      <p className="menu cta">Menu</p>
    </div>
  );
}

export default Landing;

{
  /* <div style={BUTTON_WRAPPER_STYLES}>
      <button onClick={() => handleOpenModel()}>Open Modal</button>
      {isOpen ? (
        <Modal onClose={() => handleCloseModal()}>
          <UserForm />
        </Modal>
      ) : null}
    </div> */
}
