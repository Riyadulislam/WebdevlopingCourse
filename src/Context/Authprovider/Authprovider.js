import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';




 export const authContext=createContext();
    const auth=getAuth(app);
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null) 
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const googleProviderLogin=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const singinlogin=(email,password)=>{
        setLoading(true)
     
        return signInWithEmailAndPassword(auth,email,password)
      
    }
    const logout=()=>{
        
        return signOut(auth);
    }

    const githublogin=( githubprovider)=>{
        setLoading(true)
        return signInWithPopup(auth, githubprovider)
    }
    const updateuser=( displayName, photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName, photoURL
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentuser) =>{
              console.log('inside state',currentuser)
              setUser(currentuser)
              setLoading(false)
             
          })
          return ()=> { unsubscribe();
          }
              
     },[])

    const authInfo={user,createUser,googleProviderLogin,logout,singinlogin,loading,updateuser,githublogin}
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default Authprovider;