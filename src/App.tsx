import React from 'react';
import {StateType} from "./bll/weather-reducer";
import {useSelector} from "react-redux";
import './App.scss'
import {StoreType} from "./bll/store";
import DescriptionBlock from "./components/DescriptionBlock/DescriptionBlock";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import {bgImageChange} from "./assets/backgroundImageChanger";
import {Route, Routes, useLocation} from "react-router-dom";


function App() {
    const weather = useSelector<StoreType, StateType>(state => state.weather)
    const error = useSelector<StoreType, string>(state => state.app.error)
    const url = useLocation()

    return (
        <div className={`${'app'} ${bgImageChange(weather)}`}>
            <main>
                {!!error && <h1>{error}</h1>}
                <SearchBlock/>
                <Routes>
                    {weather.current.weather_code === 0 ? <></> : <Route path={url.pathname} element={<DescriptionBlock weather={weather}/>}/>}
                </Routes>
            </main>
        </div>
    );
}

export default App;
