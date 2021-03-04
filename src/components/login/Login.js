import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = ({ userLogin }) => {
    const [name, setName] = useState(null);
    let history = useHistory();

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleLoginButton = () => {
        if (!name || name.replace(/\s/g, "").length === 0) {
            alert("You must type in something...");
        } else {
            userLogin(true);
            localStorage.setItem("user", JSON.stringify({ name: name }));
            history.push("/translation");
        }
    };

    return (
        <div className="content">
            <input placeholder="Enter name" onChange={handleInputChange} />
            <button type="button" onClick={handleLoginButton}>
                Login
            </button>
        </div>
    );
};

export default Login;
