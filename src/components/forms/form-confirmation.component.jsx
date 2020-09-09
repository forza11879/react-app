import React from 'react';

function FormConfirmation(props) {
  const { initialValues, prevStep } = props;

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
    </React.Fragment>
  );
}

export default FormConfirmation;
