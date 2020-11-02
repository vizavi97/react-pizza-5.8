import {
    ADD_TO_BASKET,
    REMOVE_TO_BASKET,
    INCREMENT_ITEM_IN_BASKET,
    DECREMENT_ITEM_IN_BASKET, CLEAR_BASKET,
} from "../types/basketTypes";

const initialState = {
    pizzasInBasket: JSON.parse(localStorage.getItem('basketItems')) || [],
}


export const basketReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_TO_BASKET:
            localStorage.setItem('basketItems', JSON.stringify([...state.pizzasInBasket,payload]))
            return {
                ...state,
                pizzasInBasket: [...state.pizzasInBasket, payload],
            }
        case REMOVE_TO_BASKET:
            const filteredArray = state.pizzasInBasket.filter(e => e.id !== payload)
            localStorage.setItem('basketItems', JSON.stringify(filteredArray))
            return {
                ...state,
                pizzasInBasket: filteredArray,
            }
        case CLEAR_BASKET:
            localStorage.removeItem('basketItems')
            console.log("cleared")
            return {
                ...state,
                pizzasInBasket: [],
            }
        case INCREMENT_ITEM_IN_BASKET:
            localStorage.setItem('basketItems', JSON.stringify([...state.pizzasInBasket,payload]))
            return {
                ...state,
                pizzasInBasket: [...state.pizzasInBasket, payload]
            }
        case DECREMENT_ITEM_IN_BASKET:
            localStorage.setItem('basketItems', JSON.stringify(payload))
            return {
                ...state,
                pizzasInBasket: payload
            }
        default: return state
    }
}
