import { createContext } from 'react';
import React, { useContext,useState } from "react"

const AuthContext=createContext(null);


export const AuthProvider=({children})=> {


    // declare the state variable as user..
    const[user,setuser]=useState();

    // user,login ,logout are object which will be given from authprovider to all the children in app.js route 
    const login=(user)=>
    {
        setuser(user);
        
    }
    const logout=()=>
    {
        setuser(null);
        // initialized the user object as null when we click on logout button
    }
  return (

    // AuthContext.Provider is providing user,login,logout object with the help of value attribute to all the chilren in app.js and it is sent with the help of useAuth()..
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
  )
}


// useAuth function is used to give access of user,login ,logout object to any component whomever wants to use it for authentication
// usecontext is used when we want to share the state variable among different components..

export const useAuth=()=>{
    return useContext(AuthContext); 
}
