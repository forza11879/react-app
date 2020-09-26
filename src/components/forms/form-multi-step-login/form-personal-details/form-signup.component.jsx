import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../form-elements/formik-control.js';
import './form.styles.scss';

function SignUpForm(props) {
  const { initialValues, secondStep } = props;

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    const { email, password } = values;
    secondStep({ email, password }, 1);
  };

  const prevStep = () => {
    secondStep({}, -1);
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
              type="email"
              label="E-mail"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />

            <button type="button" onClick={prevStep}>
              Previous Step
            </button>
            <br />
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
