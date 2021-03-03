import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import MOCK_IMAGES from "../../mocks/images.mock";

const Profile = ({ userLogin }) => {
    const [handSignMapping, setHandSignMapping] = useState();
    const [translationHistory, setTranslationHistory] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setHandSignMapping(MOCK_IMAGES);
    }, []);

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

    const translate = () => {
        return translationHistory.map((input, index) => {
            let translation = [];
            for (let letter of input) {
                let letterMapping = handSignMapping.find(
                    (element) => element.name === letter
                );
                translation.push(letterMapping);
            }
            return (
                <div key={index}>
                    <div>{translationHistory[index]}</div>
                    {handSignTranslation(translation)}
                </div>
            );
        });
    };

    const handSignTranslation = (input) =>
        input.map((sign, index) => {
            return <img key={index} src={sign.url} alt="hand sign"></img>;
        });

    return (
        <div>
            This is the profile component
            <button type="button" onClick={clearStorage}>
                Clear and logout
            </button>
            {translationHistory.length > 0 ? (
                translate()
            ) : (
                <div>No translation history yet</div>
            )}
        </div>
    );
};

export default Profile;
