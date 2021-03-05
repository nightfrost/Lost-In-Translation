import { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={[isUserLoggedIn, setIsUserLoggedIn]}>
            {props.children}
        </LoginContext.Provider>
    );
};
