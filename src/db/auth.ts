import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';

const AuthDB = () => {
    const provider = new GoogleAuthProvider
    const auth = getAuth();
    const dispatch = useDispatch();

    async function googleAuth() {
        try {
            const result = await signInWithPopup(auth, provider);
            GoogleAuthProvider.credentialFromResult(result);

            dispatch(setUser(result.user));
        } catch(_err) {
            console.info(_err);
        }
    }

    async function logout() {
        try {
            await signOut(auth).finally(() => {
                dispatch(setUser(null));
            })
        } catch(_err) {

        }
    }

    return {
        googleAuth,
        logout
    }
};

export default AuthDB