import { BrowserRouter, Switch } from "react-router-dom";
import { useState } from "react";
import RouteController from "./components/routes/RouteController";
import Login from "./components/routes/Login";
import Translation from "./components/routes/Translation";
import Profile from "./components/routes/Profile";
import Navbar from "./components/shared/Navbar";

const App = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const update = (value) => {
        setIsUserLoggedIn(value);
    };

    return (
        <BrowserRouter>
            <Navbar isUserLoggedIn={isUserLoggedIn} />
            <Switch>
                <RouteController
                    type="login"
                    exact
                    path="/"
                    children={<Login userLogin={(value) => update(value)} />}
                />

                <RouteController
                    type="private"
                    path="/profile"
                    children={<Profile userLogin={(value) => update(value)} />}
                />

                <RouteController
                    type="private"
                    path="/translation"
                    component={Translation}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
