import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUser(result.user);
            // })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    // special observer provided by firebase.
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
        })
    }, []);

    return {
        signInUsingGoogle,
        logOut,
        user,
    }

}

export default useFirebase;