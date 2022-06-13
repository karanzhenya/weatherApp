import React from 'react';
import {StateType} from "./bll/weather-reducer";
import {useSelector} from "react-redux";
import './App.scss'
import {StoreType} from "./bll/store";
import DescriptionBlock from "./components/DescriptionBlock";
import SearchBlock from "./components/SearchBlock";
import {bgImageChange} from "./assets/backgroundImageChanger";


function App() {
    const weather = useSelector<StoreType, StateType>(state => state.weather)

    return (
        <div className={`${'app'} ${bgImageChange(weather)}`}>
            <main>
                <SearchBlock/>
                {weather.location.name && <DescriptionBlock weather={weather}/>}
            </main>
        </div>
    );
}

export default App;
