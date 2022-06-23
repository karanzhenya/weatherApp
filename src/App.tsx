import React from 'react';
import {StateType} from "./bll/weather-reducer";
import {useSelector} from "react-redux";
import './App.scss'
import {StoreType} from "./bll/store";
import DescriptionBlock from "./components/DescriptionBlock/DescriptionBlock";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import {bgImageChange} from "./assets/backgroundImageChanger";
import Preloader from "./assets/Preloader/Preloader";


function App() {
    const weather = useSelector<StoreType, StateType>(state => state.weather)
    const loading = useSelector<StoreType, boolean>(state => state.app.isLoading)

    return (
        <div className={`${'app'} ${bgImageChange(weather)}`}>
            <main>
                <SearchBlock/>
                {loading && <Preloader/>}
                {weather.current.weather_code === 0 ? <></> : <DescriptionBlock loading={loading} weather={weather}/>}
            </main>
        </div>
    );
}

export default App;
