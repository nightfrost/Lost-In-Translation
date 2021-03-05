import { Route, Redirect } from "react-router-dom";

const RouteController = (props) => {
    const session = localStorage.getItem("user");

    if (props.type === "private") {
        if (!session) {
            return <Redirect to="/" />;
        } else {
            return <Route {...props} />;
        }
    }

    if (props.type === "public") {
        return <Route {...props} />;
    }
};
export default RouteController;
