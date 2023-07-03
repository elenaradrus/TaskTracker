import { useState } from 'react';

import authDataService from '../services/auth';

import useGetUser from './useGetUser';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { getUser } = useGetUser();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    let response = null;

    try {
      const userCredentials = await authDataService.login(email, password);
      const user = await getUser(userCredentials.userId);
      setLoading(false);
      response = {
        ...userCredentials,
        ...user,
        name: user.email,
      }
    } catch (error) {
      console.error('💣 ERROR ❗❗❗ at useLogin.js: login: ', error);
      setLoading(false);
      setError(error.message);
    }

    return response;
  };

  return { login, loading, error };
};

export default useLogin;
