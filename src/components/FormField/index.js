import React from "react";

function FormField({ label, type, name, value, onChange }) {
  const isTextArea = type === 'textarea';
  const Component = isTextArea ? 'textarea' : 'input';
  {/*
  return (
    <div>
      <label>
        {label}: 
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
  </div>*/}
  return (
    <div>
      <label>
        {label}: 
        <Component
          type= {isTextArea?undefined:type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;