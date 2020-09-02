import React from 'react';
import './form.styles.scss';

function TextError(props) {
  return <div className="error">{props.children}</div>;
}

export default TextError;
