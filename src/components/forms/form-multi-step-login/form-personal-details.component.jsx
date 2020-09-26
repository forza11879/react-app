import React from 'react';
import SignUpForm from './form-personal-details/form-signup.component';
import SignInForm from './form-personal-details/form-signin.component';

import './form.styles.scss';

function FormPersonalDetails(props) {
  const {
    initialValues,
    secondStep,
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
        <SignUpForm
          initialValues={initialValues}
          secondStep={secondStep}
          prevStep={secondStep}
        />
      </div>
      <div className="form-container sign-in-container">
        {!toggleValues.isActive && (
          <SignInForm initialValues={initialValues} secondStep={secondStep} />
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

export default FormPersonalDetails;
