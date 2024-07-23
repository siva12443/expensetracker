import { useState, useEffect } from "react";
import {auth} from '../../Firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";

const authContext = React.createContext();

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    },[])

    async function initializeUser(user){
        if(user){
            setCurrentUser({...user});
            setUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
}