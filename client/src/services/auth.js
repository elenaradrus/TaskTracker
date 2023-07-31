import { auth } from "../firebase-config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

import usersDataService from "./users";

class AuthDataService {
    signUp = async (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then(async(userCredential) => {
            const user = userCredential.user;
            const token = await user.getIdToken();
            const userId = user.uid;
            const email = user.email;
            usersDataService.addUser(userId, token, email);
            return {
                token,
                userId,
                email
            };
        }).catch((error) => {
            console.error('💣 ERROR ❗❗❗ at auth.js signUp: ', error);
        });
    };
    login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            const token = await user.getIdToken();
            const userId = user.uid;
            const email = user.email;
            // const verified = user.emailVerified;
            return {
              token,
              userId,
              email,
            //   verified
            };
          })
          .catch((error) => {
            console.error('💣 ERROR ❗❗❗ at auth.js login: ', error);
          });
    };

}

const authDataService = new AuthDataService();
export default authDataService;
