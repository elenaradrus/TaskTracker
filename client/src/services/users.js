import { db } from '../firebase-config';

import COLLECTIONS from './constants';

import {
    collection,
    add,
    getDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDocs,
    query,
    where,
    setDoc,
} from 'firebase/firestore';

class UsersDataService {
    addUser = async (userId, token, email) => {
        try {
            const userDocRef = doc(db, COLLECTIONS.USERS, userId);
            await setDoc(userDocRef, {
                email,
            }, {token}).then(() => {
                return userId;
            });
          } catch (error) {
            console.error('💣 ERROR ❗❗❗ at users.js addUser: ', error);
          }
    };



}

const usersDataService = new UsersDataService();
export default usersDataService;


