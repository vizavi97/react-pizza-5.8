import {CREATE_ORDER, GET_ORDERS_BY_ID} from "../types/orderTypes";

const initialState = {
    orders: [],
    ordersLoader: false,
    ordersErrors: false,
    ordersMessages: '',
    showOrderToast: false,
}


export const orderReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case CREATE_ORDER:
            return {
                ...state,
                orders: [...state.orders, payload.orders],
                ordersLoader: payload.ordersLoader,
                ordersErrors: payload.ordersErrors,
                ordersMessages: payload.ordersMessages,
                showOrderToast: payload.showOrderToast,
            }
        case GET_ORDERS_BY_ID:
            return {
                ...state,
                orders: payload.orders,
                ordersLoader: payload.ordersLoader,
                ordersErrors: payload.ordersErrors,
                ordersMessages: payload.ordersMessages,
                showOrderToast: payload.showOrderToast,
            }
        default:
            return state
    }
}
