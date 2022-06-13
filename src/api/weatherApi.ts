import axios from "axios"

export const weatherApi = {
    getCurrentWeather(city: string | null) {
        return axios.get(`http://api.weatherstack.com/current?access_key=a334c850523af2b3d68dfca4610716c9&query=${city}`)
    }
}