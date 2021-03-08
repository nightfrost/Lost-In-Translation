// TranslationItem works as a card which displays individual translations
// signs.css uses sprite sheet in assets/images to render the correspondent letter translation
// to hand sign
const TranslationItem = ({ inputToBeTranslated }) => {
    const handSignTranslation = Array.from(inputToBeTranslated).map(
        (letter, index) => {
            return <div key={index} className={`letter-${letter}`}></div>;
        }
    );

    return (
        <div className="translation-item-card shadow-card">
            <div className="card-text">{inputToBeTranslated}</div>
            <div className="card-signs">{handSignTranslation}</div>
        </div>
    );
};

export default TranslationItem;
