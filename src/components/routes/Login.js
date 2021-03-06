import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import "../../style/login.css";

const Login = () => {
    const [name, setName] = useState(null);
    const [isUserLoggedIn, setIsUserLoggedIn] = useContext(LoginContext);

    let history = useHistory();

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleLoginButton = () => {
        if (!name || name.trim().length === 0) {
            alert("You must type in something...");
        } else {
            localStorage.setItem("user", JSON.stringify({ name: name }));
            setIsUserLoggedIn(!isUserLoggedIn);
            history.push("/translation");
        }
    };

    return (
        <div className="input">
            <input type="text" onChange={handleInputChange} id="input-a" />
            <label for="input-a"> Enter your name! </label>
            <div className="container">
                <button
                    className="btn"
                    type="button"
                    onClick={handleLoginButton}
                >
                    START
                </button>
            </div>
        </div>
    );
};

export default Login;
