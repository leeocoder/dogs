type ErrorProps = {
  error: string | null;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;
  return <p className='errorMessage'>{error}</p>;
};

export default Error;
