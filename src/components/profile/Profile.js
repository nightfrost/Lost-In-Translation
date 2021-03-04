import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import TranslationItem from "../shared/TranslationItem";

const Profile = ({ userLogin }) => {
    const [translationHistory, setTranslationHistory] = useState([]);
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
        userLogin(false);
        history.push("/");
    };

    const showTranslations = () => {
        return translationHistory.map((input, index) => (
            <TranslationItem key={index} inputToBeTranslated={input} />
        ));
    };

    return (
        <div className="content">
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
