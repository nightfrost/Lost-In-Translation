import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";

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
        <div>
            <input placeholder="Enter name" onChange={handleInputChange} />
            <button type="button" onClick={handleLoginButton}>
                Login
            </button>
        </div>
    );
};

export default Login;
