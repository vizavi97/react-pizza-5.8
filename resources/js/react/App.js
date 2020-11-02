import React, {useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom';
import {customTheme} from "./config/theme";
import {CSSReset, ThemeProvider} from "@chakra-ui/core";
import {useRoutes} from "./hooks/useRoutes";
import {connect} from "react-redux";
import {meQuery} from "./store/actions/userActions";


const App = props => {
    useEffect(() => {
        props.meQuery()
    }, [])
    const isAuth = props.user.userIsAuthorization;
    const router = useRoutes(isAuth)
    return (
        <ThemeProvider theme={customTheme}>
          <CSSReset />
            <BrowserRouter>
                {router}
            </BrowserRouter>
        </ThemeProvider>
    )
}
export default connect(state=>state, {meQuery})(App)
