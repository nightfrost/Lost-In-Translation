import { useState } from "react";
import MOCK_IMAGES from "../../mocks/images.mock";

const Translation = () => {
    const [userInput, setUserInput] = useState(null);
    const [translatedInput, setTranslatedInput] = useState([]);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const translate = () => {
        const arr = userInput.split("");

        let translation = [];
        for (let letter of arr) {
            let url = MOCK_IMAGES.find((element) => element.name === letter);
            translation.push(url);
        }

        setTranslatedInput(translation);
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
            JSON.stringify({ translations: translations })
        );
    };

    const handSign = translatedInput.map((url, index) => {
        return <img key={index} src={url.url} alt="hand sign"></img>;
    });

    return (
        <div>
            <input
                type="text"
                placeholder="TO be translated"
                onChange={handleInputChange}
            ></input>
            <button type="button" onClick={translate}>
                Translate
            </button>
            <div>{handSign}</div>
        </div>
    );
};

export default Translation;
