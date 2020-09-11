import React, { useState } from 'react';
import FormUserDetails from './form-user-details.component';
import FormPersonalDetails from './form-personal-details.component';
import FormConfirmation from './form-confirmation.component';
import FormSuccess from './form-success.component';
import FormError from './form-error.component';

function UserForm() {
  const initialValues = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [inputValue, setInputValue] = useState(initialValues);
  const { step } = inputValue;

  const setStep = (newProps, stepIncrement) => {
    setInputValue((prevState) => ({
      ...prevState,
      ...newProps,
      step: prevState.step + stepIncrement,
    }));
  };

  // Proceed to next step
  // const firstStep = (firstName, lastName) => {
  //   setInputValue((prevState) => ({
  //     ...prevState,
  //     step: prevState.step + 1,
  //     firstName: firstName,
  //     lastName: lastName,
  //   }));
  // };

  switch (step) {
    case 1:
      return <FormUserDetails initialValues={inputValue} firstStep={setStep} />;
    case 2:
      return (
        <FormPersonalDetails
          initialValues={inputValue}
          secondStep={setStep}
          prevStep={setStep}
        />
      );
    case 3:
      return (
        <FormConfirmation
          prevStep={setStep}
          thirdStep={setStep}
          fourthStep={setStep}
          initialValues={inputValue}
        />
      );
    case 4:
      return <FormSuccess />;
    case 5:
      return <FormError />;
    default:
      console.log('This is a multi-step form built with React.');
  }
}

export default UserForm;
