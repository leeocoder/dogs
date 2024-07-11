import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState<any | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const request = React.useCallback(async (url: string, options: any) => {
    let response;
    let json;
    try {
      setLoading(true);
      setError(null);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) {
        throw new Error(`Error: ${json.message}`);
      }
    } catch (error: any) {
      json = null;
      setError(error.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
