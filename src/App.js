import React from 'react';
import './App.css';

import {AppConsumer, Mesh, Stage, withPixiApp} from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'

const w = 500
const h = 300

const PolygonTexture = ({image}) => {
    const texture = new PIXI.Texture.from(image)
    texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    return texture
}

const Polygon = ({vertices, uvs, indices, texture}) =>
        <Mesh texture={texture}
              uvs={uvs}
              vertices={vertices}
              indices={indices}
              drawMode={PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES}/>


const PolygonWithApp = withPixiApp(Polygon)

const App = () => {

    const image = 'https://i.imgur.com/xjRzJAD.png'

    let texture = PolygonTexture({image: image});
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
    return (<Stage width={w} height={h} options={{backgroundColor: 0xeef1f5}}>
        <PolygonWithApp {...props}/>
        <PolygonWithApp {...props2}/>
    </Stage>)
}

export default App