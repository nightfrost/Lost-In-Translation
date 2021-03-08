import exit from "../../assets/images/close.png";

// Modal component is used to display alert messages
const Modal = ({ message, show, close }) => {
    const showHide = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHide}>
            <section className="modal-main">
                <div className="modal-content">
                    <div className="modal-message">{message}</div>
                    <img
                        className="modal-btn"
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
