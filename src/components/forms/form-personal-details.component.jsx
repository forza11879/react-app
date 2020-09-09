import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './form-elements/formik-control.js';

function FormPersonalDetails(props) {
  const { initialValues, secondStep, prevStep } = props;

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    const { email, password } = values;
    secondStep(email, password);
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
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
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

            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormPersonalDetails;
