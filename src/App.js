import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/Login";
import Translation from "./components/translation/Translation";
import Profile from "./components/profile/Profile";
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
                <Route
                    exact
                    path="/"
                    children={<Login userLogin={(value) => update(value)} />}
                />

                {isUserLoggedIn && (
                    <Route
                        path="/profile"
                        children={
                            <Profile userLogin={(value) => update(value)} />
                        }
                    />
                )}

                {isUserLoggedIn && (
                    <Route path="/translation" component={Translation} />
                )}
            </Switch>
        </BrowserRouter>
    );
};

export default App;
