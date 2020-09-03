import React, { Component } from 'react';
import Modal from '../../components/modal/modal.component';
import LoginForm from '../../components/forms/login-form.component.jsx';

import './landing.styles.scss';

class Landing extends Component {
  state = { showModal: false };
  handleShowMessageClick = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: 400,
            position: 'relative',
          }}
        >
          {/* <h1>My App</h1> */}
          {/* <p>
            This is an example of how you might use React.createPortal. I think
            it is a pretty neat API that is yet another awesome escape hatch
            that React provides for practical reasons. Sometimes you just need
            to render something completely outside the React Tree.
          </p> */}
          <button onClick={this.handleShowMessageClick}>
            Show Secret Modal
          </button>
          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}>
              <LoginForm />
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Landing;
