import React, { useState } from 'react';
import FormUserDetails from './form-user-details.component';
import FormPersonalDetails from './form-personal-details.component';
import FormConfirmation from './form-confirmation.component';

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

  // Proceed to next step
  // const nextStep = (arg1, arg2) => {
  //   setInputValue((prevState) => ({
  //     ...prevState,
  //     step: prevState.step + 1,
  //     arg1: arg1,
  //     arg2: arg2,
  //   }));
  // };

  // Proceed to next step
  const firstStep = (firstName, lastName) => {
    setInputValue((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
      firstName: firstName,
      lastName: lastName,
    }));
  };
  // Proceed to next step
  const secondStep = (email, password) => {
    setInputValue((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
      email: email,
      password: password,
    }));
  };

  // Go back to prev step
  const prevStep = () => {
    setInputValue((prevState) => ({
      ...prevState,
      step: prevState.step - 1,
    }));
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails initialValues={inputValue} firstStep={firstStep} />
      );
    case 2:
      return (
        <FormPersonalDetails
          initialValues={inputValue}
          secondStep={secondStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <FormConfirmation prevStep={prevStep} initialValues={inputValue} />
      );
    // case 4:
    //   return <Success />;
    default:
      console.log('This is a multi-step form built with React.');
  }
}

export default UserForm;
