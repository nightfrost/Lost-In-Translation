import { Link } from "react-router-dom";

const Navbar = () => {
    const user = localStorage.getItem("user");

    return (
        <div>
            This is the navbar.
            <Link to="/profile">{user && JSON.parse(user).name}</Link>
        </div>
    );
};

export default Navbar;
