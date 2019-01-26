import React from 'react';
import './App.css';
import {MapStage} from "./components/MapStage";


const App = () => {
    const w = 500
    const h = 300

    return <MapStage w={w} h={h}/>
}

export default App