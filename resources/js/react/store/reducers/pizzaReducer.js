import {GET_ALL_PIZZAS} from "../types/pizzaTypes";

const initialState = {
    pizzas: [],
    errors: null,
    loader: false,
}


export const PizzaReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_PIZZAS:
            return {
                ...state,
                pizzas: payload.pizzas,
                errors: payload.errors,
                loader: payload.loader
            }
        default: return state
    }
}
