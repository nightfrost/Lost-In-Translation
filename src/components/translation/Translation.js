import { useEffect, useState } from "react";
import MOCK_IMAGES from "../../mocks/images.mock";

const Translation = () => {
    const [userInput, setUserInput] = useState(null);
    const [translatedUserInput, setTranslatedUserInput] = useState([]);
    const [handSignMapping, setHandSignMapping] = useState();

    useEffect(() => {
        setHandSignMapping(MOCK_IMAGES);
    }, []);

    const handleInputChange = (event) => {
        setUserInput(event.target.value.toLowerCase());
    };

    const translate = () => {
        const arr = userInput.split("");

        let translation = [];
        for (let letter of arr) {
            let letterMapping = handSignMapping.find(
                (element) => element.name === letter
            );
            translation.push(letterMapping);
        }

        setTranslatedUserInput(translation);
        updateLocalStorageTranslations();
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

    const handSignTranslation = translatedUserInput.map((sign, index) => {
        return <img key={index} src={sign.url} alt="hand sign"></img>;
    });

    return (
        <div className="content">
            <input
                type="text"
                placeholder="To be translated..."
                onChange={handleInputChange}
            ></input>
            <button className="btn btn-primary" type="button" onClick={translate}>
                Translate
            </button>
            <div>{handSignTranslation}</div>
        </div>
    );
};

export default Translation;
