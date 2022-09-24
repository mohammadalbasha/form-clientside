import { useState, useCallback, useContext } from 'react';
import axios from 'axios';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setSuccess(false);
    setError(null);

    let headers = {...requestConfig.headers};
    try {
      const response = await axios({url : requestConfig.url , data :requestConfig.body ? requestConfig.body : null,      
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers,
      });
      const data = await response.data;
      setSuccess(true);
      applyData(data);
      setIsLoading(false);

    } catch (err) {      
      if (err.response && err.response.data){
        setError(err.response.data.message || 'Something went wrong!');
        setIsLoading(false);

      }
      else 
      {setError(err.message)
        setIsLoading(false);

      }
   
      
    }
  }, []);

  return {
    isLoading,
    error,
    success,
    sendRequest,
  };
};

export default useHttp;
