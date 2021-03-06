import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Modal from "../shared/Modal";

const Login = () => {
    const [name, setName] = useState(null);
    const [isUserLoggedIn, setIsUserLoggedIn] = useContext(LoginContext);

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState(null);

    let history = useHistory();

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleLoginButton = () => {
        if (!name || name.trim().length === 0) {
            openModal("You must type in something...");
        } else {
            localStorage.setItem("user", JSON.stringify({ name: name }));
            setIsUserLoggedIn(!isUserLoggedIn);
            history.push("/translation");
        }
    };

    const openModal = (message) => {
        setModalMessage(message);
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="loginInputWrapper">
            <input
                className="loginInput"
                type="text"
                onChange={handleInputChange}
                id="input-a"
            />
            <label htmlFor="input-a"> Enter your name! </label>
            <div className="container">
                <button
                    className="btn"
                    type="button"
                    onClick={handleLoginButton}
                >
                    START
                </button>
            </div>
            <Modal show={showModal} close={closeModal} message={modalMessage} />
        </div>
    );
};

export default Login;
