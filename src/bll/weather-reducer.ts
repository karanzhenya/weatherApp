import {AxiosResponse} from "axios";
import {Dispatch} from "redux";
import {weatherApi} from "../api/weatherApi";

export type StateType = {
    current: {
        cloudcover: number
        feelslike: number
        humidity: number
        is_day: string
        observation_time: string
        precip: number
        pressure: number
        temperature: number
        uv_index: number
        visibility: number
        weather_code: number
        wind_degree: number
        wind_dir: string
        wind_speed: number
        weather_descriptions: string[]
    }
    location: {
        country: string
        lat: string
        localtime: string
        localtime_epoch: number
        lon: string
        name: string
        region: string
        timezone_id: string
        utc_offset: string
    }
}

export type ActionsType = ReturnType<typeof setWeatherDataAC>

const initialState: StateType = {
    current: {
        cloudcover: 0,
        feelslike: 0,
        humidity: 0,
        is_day: '',
        observation_time: '',
        precip: 0,
        pressure: 0,
        temperature: 0,
        uv_index: 0,
        visibility: 0,
        weather_code: 0,
        wind_degree: 0,
        wind_dir: '',
        wind_speed: 0,
        weather_descriptions: ['']
    },
    location: {
        country: '',
        lat: '',
        localtime: '',
        localtime_epoch: 0,
        lon: '',
        name: '',
        region: '',
        timezone_id: '',
        utc_offset: ''
    }
}

export const WeatherReducer = (state: StateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-WEATHER-DATA": {
            let stateCopy = {...state}
            stateCopy = action.data
            return stateCopy
        }
        default:
            return state
    }
}

export const setWeatherDataAC = (data: StateType) => {
    return ({type: 'SET-WEATHER-DATA', data} as const)
}

export const setWeatherData = (city: string | null) => (dispatch: Dispatch<ActionsType>) => {
    weatherApi.getCurrentWeather(city).then((res: AxiosResponse<StateType>) => {
        dispatch(setWeatherDataAC(res.data))
    })
}