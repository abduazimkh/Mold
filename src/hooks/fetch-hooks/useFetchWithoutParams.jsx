import { useEffect, useState } from 'react';
import PUBLIC_API_INSTANCE from '../../api/public/public_api_instance';

const useFetchWithoutParams = (ENDPOINT) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const abortionRequest = new AbortController();
    function getData() {
      PUBLIC_API_INSTANCE
        .get(ENDPOINT, { signal: abortionRequest.signal })
        .then((response) => {
          if(response.status === 200){
            setData(response?.data);
            setIsLoading(false);
            setError(false);
            setMessage(response.data?.message);
          }
        })
        .catch((err) => {
          setError(true);
          setIsLoading(false);
          setMessage(err.response?.data?.message)
        })
    }
    getData();
    return () => abortionRequest.abort();
  }, [ENDPOINT]);
  return { data, message, error, isLoading};
}

export default useFetchWithoutParams
