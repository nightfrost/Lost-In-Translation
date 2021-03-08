import { useState, createContext } from "react";

// Login context used to share state regarding user being logged in or not
export const LoginContext = createContext();

export const LoginProvider = (props) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={[isUserLoggedIn, setIsUserLoggedIn]}>
            {props.children}
        </LoginContext.Provider>
    );
};
