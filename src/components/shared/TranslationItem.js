import { useState, useEffect } from "react";
import MOCK_IMAGES from "../../mocks/images.mock";

const TranslationItem = ({ inputToBeTranslated }) => {
    const [translatedInput, setTranslatedInput] = useState([]);
    const [handSignMapping, setHandSignMapping] = useState();

    useEffect(() => {
        setHandSignMapping(MOCK_IMAGES);
    }, []);

    useEffect(() => {
        if (handSignMapping) {
            const arr = inputToBeTranslated.split("");

            let translation = [];
            for (let letter of arr) {
                let letterMapping = handSignMapping.find(
                    (element) => element.name === letter
                );
                translation.push(letterMapping);
            }
            setTranslatedInput(translation);
        }
    }, [inputToBeTranslated, handSignMapping]);

    const handSignTranslation = translatedInput.map((sign, index) => {
        return <img key={index} src={sign.url} alt="hand sign"></img>;
    });

    return (
        <div>
            <span>
                {inputToBeTranslated} {handSignTranslation}
            </span>
        </div>
    );
};

export default TranslationItem;
