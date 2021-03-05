import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useContext(LoginContext);
    const [name, setName] = useState();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user || isUserLoggedIn) {
            setName(JSON.parse(user).name);
            setIsUserLoggedIn(true);
        }
    }, [isUserLoggedIn, setIsUserLoggedIn]);

    const updateLinks = () => {
        if (isUserLoggedIn) {
            return (
                <span>
                    | Hello,
                    <span>
                        {" "}
                        <Link to="/profile">{name}</Link>
                    </span>{" "}
                    |
                    <span>
                        {" "}
                        <Link to="/translation">Translation</Link>
                    </span>
                </span>
            );
        }
    };

    return <div className="navbar">Lost in translation app {updateLinks()}</div>;
};

export default Navbar;
