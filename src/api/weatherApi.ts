import axios, {AxiosResponse} from "axios"
import {StateType} from "../bll/weather-reducer";

export const weatherApi = {
    getCurrentWeather(city: string | null): Promise<AxiosResponse<StateType>> {
        return axios.get(`http://api.weatherstack.com/current?access_key=e94698e29dfd54664c0d4c3c7693e9a6&query=${city}`)
    }
}