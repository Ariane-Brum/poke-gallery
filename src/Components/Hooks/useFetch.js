import React from "react";

function useFetch() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url) => {
    let response;
    let json;

    try {
      setLoading(true);
      setError(null);
      response = await fetch(url);
      if (!response.ok)
        throw new Error("Não foi possível pegar os dados da requisição");
      json = await response.json();
    } catch (err) {
      setError(err.message);
      json = null;
    } finally {
      setLoading(false);
      setData(json);
      return {
        response,
        json,
      };
    }
  }, []);

  return {
    data,
    error,
    loading,
    setLoading,
    request,
  };
}

export default useFetch;
