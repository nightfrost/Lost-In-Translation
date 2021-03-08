import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useContext(LoginContext);
    const [name, setName] = useState();

    const location = useLocation();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user || isUserLoggedIn) {
            setName(JSON.parse(user).name);
            setIsUserLoggedIn(true);
        }
    }, [isUserLoggedIn, setIsUserLoggedIn]);

    // if user is logged in show additional links in navbar
    const updateLinks = () => {
        if (isUserLoggedIn) {
            return (
                <div className="nav-links">
                    <div>
                        Hello,{" "}
                        <Link
                            className={
                                location.pathname === "/profile"
                                    ? "current-link"
                                    : "link"
                            }
                            to="/profile"
                        >
                            {name}
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={
                                location.pathname === "/translation"
                                    ? "current-link"
                                    : "link"
                            }
                            to="/translation"
                        >
                            Translation
                        </Link>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="navbar shadow">
            <div className="navbrand">
                <div className="logo-splash">
                    <img className="logo" src={logo} alt="logo"></img>
                </div>
                <span className="text">Lost In Translation</span>
            </div>
            <div>{updateLinks()}</div>
        </div>
    );
};

export default Navbar;
