import {StateType} from "../bll/weather-reducer";

export function bgImageChange(weather: StateType) {
    switch (weather.current.weather_descriptions[0].toLowerCase()) {
        case 'sunny': {
            return 'app-bg-sun'
        }
        case 'clear': {
            return 'app-bg-clear'
        }
        case 'cloudy': {
            return 'app-bg-cloudy'
        }
        case 'smoke': {
            return 'app-bg-cloudy'
        }
        case 'mist': {
            return 'app-bg-mist'
        }
        case 'partly cloudy': {
            return 'app-bg-partly-cloudy'
        }
        case 'light rain': {
            return 'app-bg-rain'
        }
        case 'light drizzle': {
            return 'app-bg-light-drizzle'
        }
        case 'thunderstorm': {
            return 'app-bg-thunderstorm'
        }
        case 'rain shower': {
            return 'app-bg-rain'
        }
        case 'thunderstorm in vicinity, rain with thunderstorm': {
            return 'app-bg-thunderstorm-rain'
        }
        case 'overcast': {
            return 'app-bg-rain'
        }
        case 'patchy rain possible': {
            return 'app-bg-rain'
        }
        case 'light rain shower': {
            return 'app-bg-rain'
        }
        case 'moderate rain': {
            return 'app-bg-rain'
        }
        case 'thundery outbreaks possible': {
            return 'app-bg-thunderstorm'
        }
        case 'moderate or heavy rain shower': {
            return 'app-bg-heavy-rain'
        }
        case 'patchy light rain with thunder': {
            return 'app-bg-heavy-rain'
        }
        case 'thunderstorm, rain shower': {
            return 'app-bg-heavy-rain'
        }
        case 'light rain shower, rain with thunderstorm, squalls': {
            return 'app-bg-rain'
        }
        case 'heavy rain and hail with thunderstorm, squalls': {
            return 'app-bg-heavy-rain'
        }
        case 'shower in vicinity': {
            return 'app-bg-rain'
        }
        case 'snow': {
            return 'app-bg-heavy-winter'
        }
        default: return 'app-bg-main-bg'
    }
}