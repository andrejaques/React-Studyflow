import React from "react";
import { Route, Switch } from "react-router-dom";

import { FirstPage } from "../firstpage/FirstPage";
import { SecondPage } from "../secondpage/SecondPage";
import { ThirdPage } from "../thirdpage/ThirdPage";
import { PageNotFound } from '../pagenotfound/PageNotFound';

export const Routes = () => (
  <Switch>
        <Route path="/" exact={true}>
            <FirstPage />
        </Route>
        <Route path="/second" exact={true}>
            <SecondPage />
        </Route>
        <Route path="/third">
            <ThirdPage />
        </Route>
        <Route>
            <PageNotFound />
        </Route>
    </Switch>
);
