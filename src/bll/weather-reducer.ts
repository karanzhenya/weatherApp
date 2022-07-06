import {Dispatch} from "redux";
import {weatherApi} from "../api/weatherApi";
import {setErrorAC, setLoadingAC} from "./app-reducer";
import {AppThunkType, RootActionsType} from "./store";

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

export type WeatherActionsType = ReturnType<typeof setWeatherDataAC>

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

export const WeatherReducer = (state: StateType = initialState, action: WeatherActionsType) => {
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

export const setWeatherData = (city: string | null): AppThunkType => (dispatch: Dispatch<RootActionsType>) => {
    dispatch(setLoadingAC(true))
    weatherApi.getCurrentWeather(city).then((res: any) => {
        if (res.data.current.weather_descriptions[0] !== '') {
            dispatch(setWeatherDataAC(res.data))
            console.log(res.data)
        }
        if (res.success === 'false') {
            console.log(res.error.info)
        } else {
            console.log(res.data)
        }
    }).catch((error) => {
        console.log(error.info)
        dispatch(setErrorAC(error.info))
    }).finally(() => {
        dispatch(setLoadingAC(false))
    })
}