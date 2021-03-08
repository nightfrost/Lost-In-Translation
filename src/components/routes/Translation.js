import { useState } from "react";
import TranslationItem from "../shared/TranslationItem";
import arrow from "../../assets/images/down-arrow.png";
import Modal from "../shared/Modal";

// Translation component works as home page if user is already logged in
// here user can make translations
const Translation = () => {
    const [userInput, setUserInput] = useState(null);
    const [inputToBeTranslated, setInputToBeTranslated] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState(null);

    const handleInputChange = (event) => {
        setUserInput(event.target.value.toLowerCase());
    };

    const handleTranslateButtonClick = () => {
        if (!userInput || userInput.trim().length === 0) {
            openModal("You must type in something...");
        } else if (/[^\w\s]/.test(userInput)) {
            openModal("You entered invalid characters...");
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
        // with JSON.stringify it's possible to use object for value instead of only one string
        localStorage.setItem(
            "user",
            JSON.stringify({
                name: JSON.parse(user).name,
                translations: translations,
            })
        );
    };

    const openModal = (message) => {
        setModalMessage(message);
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <div className="translate-wrapper">
                <input
                    className="translate-input"
                    type="text"
                    placeholder="To be translated..."
                    onChange={handleInputChange}
                ></input>
                <img
                    className="img-btn"
                    src={arrow}
                    onClick={handleTranslateButtonClick}
                    alt="translate"
                ></img>
            </div>

            {inputToBeTranslated && (
                <TranslationItem inputToBeTranslated={inputToBeTranslated} />
            )}

            <Modal show={showModal} close={closeModal} message={modalMessage} />
        </div>
    );
};

export default Translation;
