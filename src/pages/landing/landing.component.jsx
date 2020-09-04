import React, { useState } from 'react';
import Modal from '../../components/modal/modal.component';
import LoginForm from '../../components/forms/login-form.component.jsx';

import './landing.styles.scss';

const BUTTON_WRAPPER_STYLES = {
  height: '100%',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
};
function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModel = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  return (
    <div style={BUTTON_WRAPPER_STYLES}>
      <button onClick={() => handleOpenModel()}>Open Modal</button>
      {isOpen ? (
        <Modal onClose={() => handleCloseModal()}>
          <LoginForm />
        </Modal>
      ) : null}
    </div>
  );
}

export default Landing;
