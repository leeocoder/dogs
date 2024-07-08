import React from 'react';

const validation: { [key: string]: { regex: RegExp; message: string } } = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Por favor, informe um endereço de email válido.',
  },
};

function useForm(type: 'email' | 'required' | false = 'required') {
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>('');

  function validate(value: string) {
    if (!type) return true;
    if (!value.length) {
      setError('Preencha o valor');
      return false;
    }
    if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    }

    setError(null);
    return true;
  }

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    error && validate(target.value);
    setValue(target?.value);
  };

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error,
  };
}

export default useForm;
