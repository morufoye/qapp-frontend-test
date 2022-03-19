import axios from "axios";
import React, { useState, useContext } from 'react'


const AuthContext = React.createContext()

export const AuthContextProvider = (props) => {

    const[isAuthenticated, setIsAuthenticated] = useState(false);
    const[welcomeName, setWelcomeName] = useState('')

    const login = (data) => {
        console.log(JSON.stringify(data))
        try {
            const url =  "http://localhost:8080/api/login"
            axios.post(url, data).then((response) => response.data
            ).then((data) => {
                console.log(JSON.stringify(data));
            }).catch((error) => console.log(error.message));
        } catch(error) {
            console.error(error);
        }
        setWelcomeName('Oyewole Moruff')
       return data;
    };

    const contextValue = {
        login,
        isAuthenticated,
        setIsAuthenticated,
        welcomeName,
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};
export default AuthContext;