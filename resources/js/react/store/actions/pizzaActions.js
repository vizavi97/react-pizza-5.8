import axios from 'axios'
import {API_URL} from "../../config/config";
import {GET_ALL_PIZZAS} from "../types/pizzaTypes";


export function getAllPizzas() {
    return async dispatch => {
        dispatch({
            type: GET_ALL_PIZZAS,
            payload: {
                pizzas: [],
                errors: null,
                loader: true
            }
        })
        await axios.get(API_URL + 'pizza')
            .then(resp =>
                dispatch({
                    type: GET_ALL_PIZZAS,
                    payload: {
                        pizzas: resp.data,
                        errors: null,
                        loader: false
                    }
                })
            )
            .catch(err => dispatch({
                type: GET_ALL_PIZZAS,
                payload: {
                    pizzas: [],
                    errors: err.data,
                    loader: false
                }
            }))
    }
}
