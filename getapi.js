import { useState, useEffect } from 'react';
import axios from 'axios';

const Getapi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        setData(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching joke:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export {Getapi};
