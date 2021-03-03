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

    return <div>This is the navbar {user && greeting()}</div>;
};

export default Navbar;
