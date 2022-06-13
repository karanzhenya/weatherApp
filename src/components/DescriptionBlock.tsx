import React, {memo} from 'react';
import {StateType} from "../bll/weather-reducer";
import {weatherDescription} from "../assets/weatherDescription";
import './DescriptionBlock.scss'


type DescriptionBlockPropsType = {
    weather: StateType
}

export default memo(function DescriptionBlock({weather}: DescriptionBlockPropsType) {
        return (
            <div className={'info-box'}>
                <h2 className={'location'}>{weather.location.name}, {weather.location.country}</h2>
                <h3 className={'time'}>{new Date().toDateString()}</h3>
                <h1 className={'temperature'}>{weather.current.temperature}℃</h1>
                <h3 className={'time'}>{weatherDescription[weather.current.weather_descriptions[0].toLowerCase()]}</h3>
                {/*<h3 className={'time'}>Осадки - {weather.current.precip}мм</h3>*/}
            </div>
        );
    }
)