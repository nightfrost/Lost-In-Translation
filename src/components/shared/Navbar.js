import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import logo from "../../assets/images/Logo.png";
import "../../style/navbar.css";

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

    const updateLinks = () => {
        if (isUserLoggedIn) {
            return (
                <div className="navLinks">
                    <div>
                        Hello,{" "}
                        <Link
                            className={
                                location.pathname === "/profile"
                                    ? "currentLink"
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
                                    ? "currentLink"
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
                <div className="logoSplash">
                    <img className="logo" src={logo} alt="logo"></img>
                </div>
                <span className="text">Lost In Translation</span>
            </div>
            <div>{updateLinks()}</div>
        </div>
    );
};

export default Navbar;
