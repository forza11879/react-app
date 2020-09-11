import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../form-elements/formik-control.js';

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
          <Form>
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

export default FormUserDetails;
