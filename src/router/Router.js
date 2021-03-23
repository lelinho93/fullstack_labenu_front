import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import InsertImage from "../components/InsertImage"
import Timeline from "../components/Timeline";
import Menu from "../components/Menu"




function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= "/login">
                    <Login/>
                </Route>
                <Route exact path="/signup">
                    <SignUp/>
                </Route>
                <Route exact path="/timeline">
                    <Menu/>
                </Route>
                <Route exact path="/insert-image">
                    <InsertImage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;