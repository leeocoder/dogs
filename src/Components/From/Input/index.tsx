import React from 'react';
import './input.css';

type Props = {
  label: string;
  type: string;
  name: string;
};

function Input({ label, type, name }: Props) {
  return (
    <div className='input-wrapper'>
      <label
        className='label'
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className='input'
        type={type}
        id={name}
        name={name}
      />
      <small className='error'>Error</small>
    </div>
  );
}

export default Input;
