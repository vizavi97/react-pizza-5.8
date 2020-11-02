import {
    ADD_TO_BASKET,
    DECREMENT_ITEM_IN_BASKET,
    INCREMENT_ITEM_IN_BASKET,
    REMOVE_TO_BASKET
} from "../types/basketTypes";

export function addToBasket(pizza) {
    return {type:ADD_TO_BASKET, payload: pizza}
}

export function removeToBasket(id) {
    return {type:REMOVE_TO_BASKET, payload: id}
}

export function incrementItemInBasket(array,id) {
    const item = array.find(e => e.id === id )
    return {type: INCREMENT_ITEM_IN_BASKET, payload: item}
}

export function decrementItemInBasket(array,id) {
    const filteredArr = array.filter(e => e.id === id ).slice(1)
    const newArr = [...array.filter(e => e.id !== id),...filteredArr]
    return {type: DECREMENT_ITEM_IN_BASKET, payload: newArr}
}

