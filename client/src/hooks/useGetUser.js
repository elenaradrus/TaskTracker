import { useState } from 'react';

import usersDataService from '../services/users';

const useGetUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUser = async (id) => {
    setLoading(true);
    setError(null);

    let response = null;

    try {
      response = await usersDataService.getUser(id);
      setLoading(false);
      
    } catch (error) {
      console.error('💣 ERROR ❗❗❗ at useGetUser.js: getUser: ', error);
      setLoading(false);
      setError(error.message);
    }

    return response;
  };

  return { getUser, loading, error };
};

export default useGetUser;
