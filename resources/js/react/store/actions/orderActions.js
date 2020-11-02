import {API_URL} from "../../config/config";
import {CREATE_ORDER, GET_ORDERS_BY_ID} from "../types/orderTypes";
import {CLEAR_BASKET} from "../types/basketTypes";


export const createOrder = object => async dispatch => {
    dispatch({
        type: CREATE_ORDER,
        payload: {
            ordersLoader: true,
            showOrderToast: false
        }
    })
    await axios.post(API_URL + "orders", object)
        .then(resp => {
            dispatch({
                type: CREATE_ORDER,
                payload: {
                    orders: resp.data.body,
                    ordersLoader: false,
                    showOrderToast: true,
                    ordersMessages: resp.data.message,
                }
            });
            dispatch({type: CLEAR_BASKET})
            dispatch({
                type: CREATE_ORDER,
                payload: {
                    showOrderToast: false,
                    ordersMessages: ''
                }
            })
        })
        .catch(error => dispatch({
            type: CREATE_ORDER,
            payload: {
                ordersLoader: false,
                ordersMessages: error
            }
        }))
}

export const getUserOrders = id => async dispatch => {
    dispatch({
        type: GET_ORDERS_BY_ID,
        payload: {
            ordersLoader: true,
        }
    })
    await axios.post(API_URL + "orders/user", {id})
        .then(resp => dispatch({
            type: GET_ORDERS_BY_ID,
            payload: {
                orders: resp.data,
                ordersLoader: false,
                ordersErrors: false,
                ordersMessages: '',
                showOrderToast: false,
            }
        }))
        .catch(_error => dispatch({
            orders: [],
            ordersLoader: false,
            ordersErrors: true,
            ordersMessages: 'Something went wrong!'
        }))
}
