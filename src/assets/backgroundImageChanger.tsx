import {StateType} from "../bll/weather-reducer";

export function bgImageChange(weather: StateType) {
    switch (weather.current.weather_descriptions[0]) {
        case 'Sunny': {
            return 'app-bg-sun'
        }
        case 'Clear': {
            return 'app-bg-clear'
        }
        case 'Cloudy': {
            return 'app-bg-cloudy'
        }
        case 'Partly cloudy': {
            return 'app-bg-partly-cloudy'
        }
        case 'Light Rain': {
            return 'app-bg-rain'
        }
        case 'Thunderstorm': {
            return 'app-bg-thunderstorm'
        }
        case 'Rain Shower': {
            return 'app-bg-rain'
        }
        case 'Thunderstorm In Vicinity, Rain With Thunderstorm': {
            return 'app-bg-thunderstorm-rain'
        }
        case 'Overcast': {
            return 'app-bg-rain'
        }
        case 'Patchy rain possible': {
            return 'app-bg-rain'
        }
        case 'Light rain shower': {
            return 'app-bg-rain'
        }
        case 'Moderate or heavy rain shower': {
            return 'app-bg-heavy-rain'
        }
        case 'Patchy light rain with thunder': {
            return 'app-bg-heavy-rain'
        }
        case 'Snow': {
            return 'app-bg-heavy-winter'
        }
    }
}