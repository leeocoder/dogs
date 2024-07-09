import React from 'react';
import './button.css';

type Props = {
  children: React.ReactNode;
};

function Button({ children, ...props }: Props) {
  return (
    <button
      className='button'
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
