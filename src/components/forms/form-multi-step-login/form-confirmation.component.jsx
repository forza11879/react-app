import React from 'react';
import { postSignup } from './utils.js';

function FormConfirmation(props) {
  const { initialValues, thirdStep } = props;

  const onClick = async () => {
    const { firstName, email, password } = initialValues;
    const obj = { name: firstName, email, password };
    const url = '/auth/signup';
    const data = await postSignup(url, obj);

    data.error ? thirdStep({}, 2) : thirdStep({}, 1);
  };

  const prevStep = () => {
    thirdStep({}, -1);
  };

  return (
    <React.Fragment>
      <ul>
        <li key={initialValues.firstName}>{initialValues.firstName}</li>
        <li key={initialValues.lastName}>{initialValues.lastName}</li>
        <li key={initialValues.email}>{initialValues.email}</li>
      </ul>
      <button type="button" onClick={prevStep}>
        Previous Step
      </button>
      <button type="button" onClick={onClick}>
        Submit
      </button>
    </React.Fragment>
  );
}

export default FormConfirmation;
