import React from 'react';
import './input.css';
import Error from '../../../Helpers/Error';

type Props = {
  label: string;
  type: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: () => boolean;
  value: string | undefined;
  error: string | null;
};

function Input({ label, type, name, value, onChange, error, onBlur }: Props) {
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
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <Error error={error} />
    </div>
  );
}

export default Input;
