import { useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import TranslationItem from "../shared/TranslationItem";
import logout from "../../assets/images/logout.png";

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
        <div>
            <div className="profile">
                <div className="profileLogout" onClick={clearStorage}>
                    Logout / clear your history{" "}
                    <img className="logoutImg" src={logout} alt="logout" />
                </div>
                <div className="profileText">
                    This is your profile page. You can find your latest
                    translation history below.
                </div>
            </div>
            {translationHistory.length > 0 ? (
                showTranslations()
            ) : (
                <div className="profileText">No translation history yet!</div>
            )}
        </div>
    );
};

export default Profile;
