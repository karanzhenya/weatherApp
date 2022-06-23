import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react';
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {setWeatherData} from "../../bll/weather-reducer";
import './SearchBlock.scss'

export default memo(function SearchBlock() {
        const dispatch = useDispatch<Dispatch<any>>()

        const [city, setCity] = useState<string>('')

        const setDataValue = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                dispatch(setWeatherData(city))
            }
        }
        const onChangeCityValue = (e: ChangeEvent<HTMLInputElement>) => {
            setCity(e.currentTarget.value)
        }
        return (
            <div className={'search-box'}>
                <input type={'text'} placeholder={'search...'}
                       className={'search-bar'}
                       onChange={onChangeCityValue}
                       onKeyPress={setDataValue}
                />
            </div>
        );
    }
)