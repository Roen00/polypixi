import {PolygonTexture} from "./PolygonTexture";
import {Stage} from "@inlet/react-pixi";
import {MapViewportWithApp} from "./MapViewport";
import {Polygon} from "./Polygon";
import React from "react";


export const MapStage = ({w, h}) => {
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
        <Stage width={w} height={h} options={{backgroundColor: 0x000000}}>
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