import { useState } from "react";
import TranslationItem from "../shared/TranslationItem";
import arrow from "../../assets/images/down-arrow.png";

const Translation = () => {
    const [userInput, setUserInput] = useState(null);
    const [inputToBeTranslated, setInputToBeTranslated] = useState(null);

    const handleInputChange = (event) => {
        setUserInput(event.target.value.toLowerCase());
    };

    const handleTranslateButtonClick = () => {
        if (!userInput || userInput.trim().length === 0) {
            alert("You must type in something...");
        } else if (/[^\w\s]/.test(userInput)) {
            alert("You entered invalid characters...");
        } else {
            setInputToBeTranslated(userInput);
            updateLocalStorageTranslations();
        }
    };

    const updateLocalStorageTranslations = () => {
        const user = localStorage.getItem("user");

        let translations = JSON.parse(user).translations;

        if (translations == null) {
            translations = [];
        }
        if (translations.length > 9) {
            translations.shift();
        }

        translations.push(userInput);
        localStorage.setItem(
            "user",
            JSON.stringify({
                name: JSON.parse(user).name,
                translations: translations,
            })
        );
    };

    return (
        <div>
            <div className="translateInputWrapper">
                <input
                    className="translateInput"
                    type="text"
                    placeholder="To be translated..."
                    onChange={handleInputChange}
                ></input>
                <img
                    className="imgBtn"
                    src={arrow}
                    onClick={handleTranslateButtonClick}
                    alt="translate"
                ></img>
            </div>

            {inputToBeTranslated && (
                <TranslationItem inputToBeTranslated={inputToBeTranslated} />
            )}
        </div>
    );
};

export default Translation;
