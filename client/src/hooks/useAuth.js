import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuth = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth();

    useEffect(() => {
            onAuthStateChanged(auth, user => {
                setUser(user);
            });
    }, [auth]);

    return { user };
}
