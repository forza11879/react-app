import React from 'react';
import { motion } from 'framer-motion';
import SignUpForm from './form-user-details/form-signup.component';
import SignInForm from './form-user-details/form-signin.component';
import './form.styles.scss';

function FormUserDetails(props) {
  const {
    initialValues,
    firstStep,
    addActiveClassToSignUp,
    toggleValues,
  } = props;

  console.log('toggleValues state two:', toggleValues);

  return (
    <div
      className={`containerForm ${
        toggleValues.isActive ? 'right-panel-active' : ''
      }`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <SignUpForm initialValues={initialValues} firstStep={firstStep} />
      </div>
      <div className="form-container sign-in-container">
        {!toggleValues.isActive && (
          <SignInForm initialValues={initialValues} firstStep={firstStep} />
        )}
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              type="button"
              onClick={addActiveClassToSignUp}
              className="ghost"
              id="signIn"
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              type="button"
              onClick={addActiveClassToSignUp}
              className="ghost"
              id="signUp"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormUserDetails;
