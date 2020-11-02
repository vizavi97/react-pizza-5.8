import {API_URL} from "../../config/config";
import {ME_QUERY, USER_LOGIN, USER_LOGOUT, USER_REGISTER} from "../types/userTypes";

const USER_API = API_URL + "auth"

export const register = user => {
    return async dispatch => {
        dispatch({
            type: USER_REGISTER,
            payload: {
                userLoader: true,
            }
        })
        await axios.post(USER_API + "/register", user)
            .then(resp => {
                dispatch({
                    type: USER_REGISTER,
                    payload: {
                        user: resp.data.data,
                        userToken: resp.headers.authorization,
                        userIsAuthorization: true,
                        userLoader: false,
                        userMessage: resp.data.message,
                    }
                })
            })
            .catch(error => dispatch({
                type: USER_REGISTER,
                payload: {
                    userIsAuthorization: false,
                    userLoader: false,
                    userErrors: true,
                    userMessage: error.data
                }
            }))
    }
}

export const login = user => {
    return async dispatch => {
        dispatch({
            type: USER_LOGIN,
            payload: {
                userLoader: true,
            }
        })
        await axios.post(USER_API + "/login", user)
            .then(resp => {
                dispatch({
                    type: USER_LOGIN,
                    payload: {
                        user: resp.data.user,
                        userIsAuthorization: true,
                        userToken: resp.headers.authorization,
                        userLoader: false,
                        userMessage: resp.data.message,
                    }
                })
            })
            .catch(error => dispatch({
                type: USER_LOGIN,
                payload: {
                    userIsAuthorization: false,
                    userLoader: false,
                    userErrors: true,
                    userMessage: error.data.message
                }
            }))
    }
}

export const meQuery = () => {
    const token = localStorage.getItem('token');
    return async dispatch => {
            dispatch({
                type: ME_QUERY,
                payload: {
                    userLoader: true,
                }
            })
            await axios.post(USER_API + '/verify', {token})
                .then(resp => {
                    localStorage.setItem('token', resp.headers.authorization)
                    dispatch({
                        type: ME_QUERY,
                        payload: {
                            user: resp.data.user,
                            userToken: resp.headers.authorization,
                            userIsAuthorization: true,
                            userLoader: false,
                        }
                    })
                })
                .catch(error => dispatch({
                    type: ME_QUERY,
                    payload: {
                        user: null,
                        userIsAuthorization: false,
                        userErrors: error.data,
                        userLoader: false,
                    }
                }))
        }
}

export const logout = () => dispatch => dispatch({type: USER_LOGOUT})
