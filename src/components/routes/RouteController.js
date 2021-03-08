import { Route, Redirect } from "react-router-dom";

// HOC to control routing
// Depending on prop type return or redirect to corresponding component
// - for type public simply return the component
// - for type login redirect to translation (a logged in user should not see the login route again)
// - for type private redirect to login (a not logged in user should be redirected to login)
const RouteController = (props) => {
    const session = localStorage.getItem("user");

    if (props.type === "login") {
        if (session) {
            return <Redirect to="/translation" />;
        } else {
            return <Route {...props} />;
        }
    }

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
