import {SELECT_CURRENCY, GET_CURRENCIES,} from "../types/currencyTypes";

const initialState = {
    currencies: [],
    selectedCurrency: JSON.parse(localStorage.getItem('currency')) || {
        name: 'USD',
        ratio: 1.00,
    }
}


export const currencyReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SELECT_CURRENCY:
            localStorage.setItem('currency',JSON.stringify(payload))
            return {
                ...state,
                selectedCurrency: payload
            }
        case GET_CURRENCIES:
            return {
                ...state,
                currencies: payload
            }
        default: return state
    }
}
