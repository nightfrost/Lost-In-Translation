import { useState } from "react";
import TranslationItem from "../shared/TranslationItem";

const Translation = () => {
    const [userInput, setUserInput] = useState(null);
    const [inputToBeTranslated, setInputToBeTranslated] = useState(null);

    const handleInputChange = (event) => {
        setUserInput(event.target.value.toLowerCase());
    };

    const handleTranslateButtonClick = () => {
        if (userInput == null || userInput.replace(/\s/g, "").length === 0) {
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
        <div className="content center">
            <input
                type="text"
                placeholder="To be translated..."
                onChange={handleInputChange}
            ></input>
            <button
                className="btn btn-primary"
                type="button"
                onClick={handleTranslateButtonClick}
            >
                Translate
            </button>
            <div className="blog-preview">
                {inputToBeTranslated && (
                    <TranslationItem inputToBeTranslated={inputToBeTranslated} />
                )}
            </div>
        </div>
    );
};

export default Translation;
