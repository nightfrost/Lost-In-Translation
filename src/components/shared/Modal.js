import exit from "../../assets/images/close.png";

// Modal component is used to display alert messages
const Modal = ({ message, show, close }) => {
    const showHide = show ? "modal displayBlock" : "modal displayNone";

    return (
        <div className={showHide}>
            <section className="modalMain">
                <div className="modalContent">
                    <div className="modalMessage">{message}</div>
                    <img
                        className="modalBtn"
                        src={exit}
                        alt="close"
                        onClick={close}
                    ></img>
                </div>
            </section>
        </div>
    );
};

export default Modal;
