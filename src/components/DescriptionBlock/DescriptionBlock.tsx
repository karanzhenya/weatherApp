import React, {memo} from 'react';
import {StateType} from "../../bll/weather-reducer";
import {weatherDescription} from "../../assets/weatherDescription";
import './DescriptionBlock.scss'
import Preloader from "../../assets/Preloader/Preloader";
import {useSelector} from "react-redux";
import {StoreType} from "../../bll/store";


type DescriptionBlockPropsType = {
    weather: StateType
}

export default memo(function DescriptionBlock({weather}: DescriptionBlockPropsType) {
    const loading = useSelector<StoreType, boolean>(state => state.app.isLoading)
    if (!!loading) {
        return <Preloader/>
    }
    return (<div className={'info-box'}>
                    <h2 className={'location'}>{weather.location.name}, {weather.location.country}</h2>
                    <h3 className={'time'}>{new Date().toDateString()}</h3>
                    <h1 className={'temperature'}>{weather.current.temperature}℃</h1>
                    <h3 className={'time'}>{weatherDescription[weather.current.weather_descriptions[0].toLowerCase()]}</h3>
                    {/*<h3 className={'time'}>Осадки - {weather.current.precip}мм</h3>*/}
                </div>
        );
    }
)