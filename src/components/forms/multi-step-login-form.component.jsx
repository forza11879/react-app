import React, { useState } from 'react';
import FormUserDetails from './form-user-details.component';
import FormPersonalDetails from './form-personal-details.component';

function UserForm() {
  const initialValues = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    occupation: '',
    city: '',
    bio: '',
  };

  const [inputValue, setInputValue] = useState(initialValues);
  const { step } = inputValue;

  // Proceed to next step
  const nextStep = () => {
    setInputValue({ ...inputValue, step: step + 1 });
  };

  // Go back to prev step
  const prevStep = () => {
    setInputValue({ ...inputValue, step: step - 1 });
  };

  // Handle fields change
  //   const handleChange = (input) => (e) => {
  //     this.setState({ [input]: e.target.value });
  //   };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          // initialValues={values}
          initialValues={inputValue}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          initialValues={inputValue}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    // case 3:
    //   return (
    //     <Confirm
    //       nextStep={this.nextStep}
    //       prevStep={this.prevStep}
    //       values={values}
    //     />
    //   );
    // case 4:
    //   return <Success />;
    default:
      console.log('This is a multi-step form built with React.');
  }
}

export default UserForm;
