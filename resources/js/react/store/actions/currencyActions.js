import {API_URL} from "../../config/config";
import {GET_CURRENCIES, SELECT_CURRENCY} from "../types/currencyTypes";

export function selectCurrency(currency) {
    return {type:SELECT_CURRENCY, payload: currency}
}

export function getAllCurrencies() {
    return async  dispatch => {
        await axios.get(API_URL + 'currency')
            .then(resp => dispatch({
                type: GET_CURRENCIES,
                payload: resp.data
            }))
    }
}
