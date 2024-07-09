type ErrorProps = {
  error: string | null;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;
  return <small className='errorMessage'>{error}</small>;
};

export default Error;
