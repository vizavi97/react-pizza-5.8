import React from "react";
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./store/reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension/index";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./App";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const app = <Provider store={store}><App/></Provider>

ReactDOM.render(
    app,
    document.getElementById('app')
)
