import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from "../components/Auth";
import Basket from "../components/basket/Basket";
import {MainLayout} from "../layout/MainLayout";
import {AuthLayout} from "../layout/AuthLayout";
import Main from "../components/Main";
import Profile from "../components/Profile";

export const useRoutes = isAuth => {
    if (isAuth) {
        return (
        <MainLayout>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/basket' component={Basket} />
                <Route exact path='/profile' component={Profile} />
                <Redirect to='/profile'/>
            </Switch>
        </MainLayout>
        )
    }
    return (
        <AuthLayout>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/login' component={Auth} />
              <Route path='/basket' component={Basket} />
              <Redirect to='/' />
            </Switch>
        </AuthLayout>
    )
}
