import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react';
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {setWeatherData} from "../../bll/weather-reducer";
import './SearchBlock.scss'
import {useNavigate} from "react-router-dom";
import {setErrorAC} from "../../bll/app-reducer";

export default memo(function SearchBlock() {
        const dispatch = useDispatch<Dispatch<any>>()
        const navigator = useNavigate();
        const [city, setCity] = useState('')


        const setDataValue = (e: KeyboardEvent<HTMLInputElement>) => {
            if (city === '') {
                setErrorAC('Incorrect value!')
            } else if (e.key === 'Enter') {
                dispatch(setWeatherData(city))
                navigator(`/weatherApp/${city}`)
            }
        }
        const onChangeCityValue = (e: ChangeEvent<HTMLInputElement>) => {
            setCity(e.currentTarget.value)
        }
        return (
            <div className={'search-box'}>
                <input type={'text'}
                       placeholder={'search...'}
                       className={'search-bar'}
                       onChange={onChangeCityValue}
                       onKeyPress={setDataValue}
                />
            </div>
        );
    }
)