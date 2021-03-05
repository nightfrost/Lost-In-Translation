import { BrowserRouter, Switch } from "react-router-dom";
import { LoginProvider } from "./components/context/LoginContext";
import RouteController from "./components/routes/RouteController";
import Login from "./components/routes/Login";
import Translation from "./components/routes/Translation";
import Profile from "./components/routes/Profile";
import Navbar from "./components/shared/Navbar";

const App = () => {
    return (
        <LoginProvider>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <RouteController
                        type="login"
                        exact
                        path="/"
                        component={Login}
                    />

                    <RouteController
                        type="private"
                        path="/translation"
                        component={Translation}
                    />

                    <RouteController
                        type="private"
                        path="/profile"
                        component={Profile}
                    />
                </Switch>
            </BrowserRouter>
        </LoginProvider>
    );
};

export default App;
