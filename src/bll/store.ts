import thunk, {ThunkAction} from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {WeatherActionsType, WeatherReducer} from "./weather-reducer";
import {AppActionsType, AppReducer} from "./app-reducer";

const reducers = combineReducers({
    weather: WeatherReducer,
    app: AppReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export type StoreType = ReturnType<typeof reducers>

export type RootActionsType = WeatherActionsType | AppActionsType

export type AppThunkType<ReturnType = void> = ThunkAction<void, StoreType, unknown, RootActionsType>

export default store;

// @ts-ignore
window.store = store