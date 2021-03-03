import { Link } from "react-router-dom";

const Navbar = () => {
    const user = localStorage.getItem("user");

    const greeting = () => {
        return (
            <span>
                | Hello,
                <span>
                    {" "}
                    <Link to="/profile">{JSON.parse(user).name}</Link>
                </span>
            </span>
        );
    };

    const goToTranslation = () => {
        return (
            <span>
                |
                <span>
                    {" "}
                    <Link to="/translation">Translation</Link>
                </span>
            </span>
        );
    };

    return (
        <div>
            This is the navbar {user && greeting()} {user && goToTranslation()}{" "}
        </div>
    );
};

export default Navbar;
