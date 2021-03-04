import { Link } from "react-router-dom";

const Navbar = ({ isUserLoggedIn }) => {
    const user = localStorage.getItem("user");

    const updateLinks = () => {
        if (isUserLoggedIn) {
            return (
                <span>
                    | Hello,
                    <span>
                        {" "}
                        <Link to="/profile">{JSON.parse(user).name}</Link>
                    </span>{" "}
                    |
                    <span>
                        {" "}
                        <Link to="/translation">Translation</Link>
                    </span>
                </span>
            );
        }
    };

    return <div className="navbar">This is the navbar {updateLinks()} </div>;
};

export default Navbar;
