import React from 'react';
import './App.css';

import {Stage} from '@inlet/react-pixi'
import {MapViewportWithApp} from './components/MapViewport'
import {PolygonTexture} from './components/PolygonTexture'
import {Polygon} from "./components/Polygon";


const App = () => {
    const w = 500
    const h = 300
    const image = 'https://i.imgur.com/xjRzJAD.png'
    const texture = PolygonTexture({image: image});
    const props = {
        indices: new Uint16Array([0, 1, 2]),
        uvs: new Float32Array([0, 0, 0, 2, 1, 0]),
        vertices: new Float32Array([0, 0, 0, h, w, 0]),
        texture: texture
    }
    const props2 = {
        indices: new Uint16Array([0, 1, 2]),
        uvs: new Float32Array([0, 0, 0, 2, 1, 0]),
        vertices: new Float32Array([w, h, w, 0, 0, 0]),
        texture: texture
    }
    return (
        <Stage width={w} height={h} options={{backgroundColor: 0xeef1f5}}>
            <MapViewportWithApp
                screenWidth={w}
                screenHeight={h}
                worldWidth={w * 2}
                worldHeight={h * 2}>
                <Polygon {...props}/>
                <Polygon {...props2}/>
            </MapViewportWithApp>
        </Stage>
    )
}

export default App