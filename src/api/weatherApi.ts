import axios, {AxiosResponse} from "axios"
import {StateType} from "../bll/weather-reducer";

export const weatherApi = {
    getCurrentWeather(city: string | null): Promise<AxiosResponse<StateType>> {
        return axios.get(`http://api.weatherstack.com/current?access_key=770f4a2d7c2f45170b07b4c076349447&query=${city}`)
    }
}