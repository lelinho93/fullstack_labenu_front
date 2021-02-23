import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";




function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= "/">
                    <Login/>
                </Route>
                <Route exact path="/">
                    
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;