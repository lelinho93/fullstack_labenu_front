import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import InsertImage from "../components/InsertImage"
import Menu from "../components/Menu"
import DetailPage from "../components/DetailPage";




function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= "/">
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
                <Route exact path="/details/:id">
                    <DetailPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;