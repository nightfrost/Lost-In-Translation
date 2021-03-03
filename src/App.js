import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/Login";
import Translation from "./components/translation/Translation";
import Profile from "./components/profile/Profile";
import Navbar from "./components/shared/Navbar";

const App = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const update = () => {
        setIsUserLoggedIn(true);
    };

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" children={<Login userLogin={update} />} />

                {isUserLoggedIn && (
                    <Route path="/profile" component={Profile} />
                )}

                {isUserLoggedIn && (
                    <Route path="/translation" component={Translation} />
                )}
            </Switch>
        </BrowserRouter>
    );
};

export default App;
