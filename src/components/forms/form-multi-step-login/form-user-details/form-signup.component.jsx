import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../form-elements/formik-control.js';
import './form.styles.scss';

function SignUpForm(props) {
  const { initialValues, firstStep } = props;

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    const { firstName, lastName } = values;
    firstStep({ firstName, lastName }, 1);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
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
        );
      }}
    </Formik>
  );
}

export default SignUpForm;

// const validationSchemaa = Yup.object().shape(
//     {
//       firstName: Yup.string().when('email', {
//         is: (email) => !email,
//         then: Yup.string().required('Required'),
//       }),
//       lastName: Yup.string().when('email', {
//         is: (email) => !email,
//         then: Yup.string().required('Required'),
//       }),
//       email: Yup.string().when('firstName', {
//         is: (firstName) => !firstName,
//         then: Yup.string().email('Invalid email format').required('Required'),
//       }),
//       password: Yup.string().when('firstName', {
//         is: (firstName) => !firstName,
//         then: Yup.string().required('Required'),
//       }),
//     },
//     [
//       ['firstName', 'email'],
//       ['lastName', 'email'],
//       ['email', 'firstName'],
//       ['password', 'firstName'],
//     ]
//   );
