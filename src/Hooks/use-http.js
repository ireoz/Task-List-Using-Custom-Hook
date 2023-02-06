import { useCallback, useState } from "react";

const Usehttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest =  useCallback(async (requestInfo,applyData) => {

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://reactdb-9d4c7-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        {
            method: requestInfo.method ? requestInfo.method : 'GET',
            body: requestInfo.body ? JSON.stringify(requestInfo.body) : null,
            headers: requestInfo.headers ? requestInfo.headers : {}
        }
            );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data)

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
    
    },[])

    return { isLoading, error, sendRequest};
}

export default Usehttp;