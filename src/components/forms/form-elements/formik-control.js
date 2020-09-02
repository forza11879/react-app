import React from 'react';
import Input from './input.component.jsx';
import Textarea from './text-area.component';
import Select from './select.component';
import RadioButtons from './radio-buttons.component';
import CheckboxGroup from './checkbox-group.component';
import DatePicker from './date-picker.component';
// import ChakraInput from './ChakraInput';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    // case 'chakraInput':
    //   return <ChakraInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
