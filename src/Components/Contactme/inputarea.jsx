import React from 'react'

const InputField = ({ type, name, placeholder, required,style }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className={style}
    required={required}
  />
);

export default InputField;