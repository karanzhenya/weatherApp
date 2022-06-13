import {applyMiddleware, combineReducers, createStore} from "redux";
import {WeatherReducer} from "./weather-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    weather: WeatherReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export type StoreType = ReturnType<typeof reducers>

export default store;

// @ts-ignore
window.store = store