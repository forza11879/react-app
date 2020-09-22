import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../form-elements/formik-control.js';
import './form.styles.scss';

function FormUserDetails(props) {
  const { initialValues, firstStep } = props;

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    const { firstName, lastName } = values;
    // firstStep(firstName, lastName);
    firstStep({ firstName, lastName }, 1);
    console.log('Form data values', values);
    console.log('Form data initialValues', initialValues);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <div className="containerForm" id="container">
            <div className="form-container sign-up-container">
              <Form>
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
                <FormikControl
                  control="input"
                  type="text"
                  label="First Name"
                  name="firstName"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Last Name"
                  name="lastName"
                />
                <button type="submit" disabled={!formik.isValid}>
                  Next Step
                </button>
              </Form>
            </div>
            <div class="form-container sign-in-container">
              <Form>
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
                <FormikControl
                  control="input"
                  type="text"
                  label="First Name"
                  name="firstName"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Last Name"
                  name="lastName"
                />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
              </Form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
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
        );
      }}
    </Formik>
  );
}

export default FormUserDetails;
