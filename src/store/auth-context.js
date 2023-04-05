import React from "react";
import { useState } from "react";

const AuthContext = React.createContext(
    {
        token:'',
        isLoaggedIn:false,
        login:(token)=>{},
        logout:()=>{}
    }
);

export const AuthContextProvider =({children})=>{
    const [token,setToken] = useState (null);
    const userLoggedIn = !! token;

    const loginHandler = (token)=>{
        setToken(token);
    };
    const logoutHandler = () =>{
        setToken(null);
    };

    const contextValue={
        token:token,
        isLoaggedIn:userLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    return<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
export default AuthContext