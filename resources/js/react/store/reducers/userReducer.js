import {ME_QUERY, USER_LOGIN, USER_REGISTER,USER_LOGOUT} from "../types/userTypes";

const initialState = {
    user: null,
    userIsAuthorization: false,
    userToken: localStorage.hasOwnProperty('token') || null,
    userLoader: false,
    userErrors: false,
    userMessage: '',
}


export const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case USER_REGISTER:
            localStorage.setItem('token',payload.userToken)
            return {
                ...state,
                user: payload.user,
                userIsAuthorization: payload.userIsAuthorization,
                userToken: payload.userToken,
                userLoader: payload.userLoader,
                userErrors: payload.userErrors,
                userMessage: payload.userMessage,
            }
        case USER_LOGIN:
            localStorage.setItem('token',payload.userToken)
            return {
                ...state,
                user: payload.user,
                userIsAuthorization: payload.userIsAuthorization,
                userToken: payload.userToken,
                userLoader: payload.userLoader,
                userErrors: payload.userErrors,
                userMessage: payload.userMessage,
            }
        case ME_QUERY:
            localStorage.setItem('token',payload.userToken)
            return {
                ...state,
                user: payload.user,
                userIsAuthorization: payload.userIsAuthorization,
                userToken: payload.userToken,
                userLoader: payload.userLoader,
                userErrors: payload.userErrors,
                userMessage: payload.userMessage,
            }
        case USER_LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                user: null,
                userIsAuthorization: false,
                userToken: '',
                userLoader: false,
                userMessage: 'You are successfully logout!'
            }
        default: return state
    }
}

