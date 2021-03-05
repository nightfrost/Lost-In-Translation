import { useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import TranslationItem from "../shared/TranslationItem";

const Profile = () => {
    const [translationHistory, setTranslationHistory] = useState([]);
    const [isUserLoggedIn, setIsUserLoggedIn] = useContext(LoginContext);
    const history = useHistory();

    useEffect(() => {
        const user = localStorage.getItem("user");
        let inputToBeTranslated = JSON.parse(user).translations;
        if (inputToBeTranslated != null) {
            let history = [];
            for (let input of inputToBeTranslated) {
                history.push(input);
            }
            setTranslationHistory(history);
        }
    }, []);

    const clearStorage = () => {
        localStorage.clear();
        setIsUserLoggedIn(!isUserLoggedIn);
        history.push("/");
    };

    const showTranslations = () => {
        return translationHistory.map((input, index) => (
            <TranslationItem key={index} inputToBeTranslated={input} />
        ));
    };

    return (
        <div className="content center">
            <p>This is the profile component</p>
            <button type="button" onClick={clearStorage}>
                Clear and logout
            </button>
            {translationHistory.length > 0 ? (
                showTranslations()
            ) : (
                    <div>No translation history yet</div>
                )}
        </div>
    );
};

export default Profile;
