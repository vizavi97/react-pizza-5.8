import {combineReducers} from "redux";
import {PizzaReducer} from "./pizzaReducer";
import {basketReducer} from "./basketReducer";
import {currencyReducer} from "./currencyReducer";
import {orderReducer} from "./orderReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    pizzas: PizzaReducer,
    basket: basketReducer,
    currency: currencyReducer,
    order: orderReducer
})
