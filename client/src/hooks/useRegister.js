import { useState } from "react";
import authDataService from "../services/auth";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signUp = async (email, password) => {
        setLoading(true);
        setError(null);

        let response = null;

        try {
            const userCredentials = await authDataService.signUp(email, password);
            setLoading(false);
            return userCredentials;
        } catch (error) {
            console.error('💣 ERROR ❗❗❗ at useSignUp.js: signUp: ', error);
            setLoading(false);
            setError(error.message);
        }

        return response;
    };

    return { signUp, loading, error };
};

export default useSignUp;
