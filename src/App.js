import React from 'react';
import './App.css';

import {AppConsumer, Mesh, Stage} from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'

// const { Stage, Mesh, AppConsumer } = ReactPixi

const image = 'https://i.imgur.com/xjRzJAD.png'
const w = 500
const h = 300
const texture = new PIXI.Texture.from(image)
texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

class MeshExample extends React.Component {

    count = 0

    state = {
        indices: new Uint16Array([
            0, 1, 2
        ]),
        uvs: new Float32Array([
            0, 0, 0, 2, 1, 0
        ]),
        vertices: new Float32Array([
            0, 0, 0, h, w, 0
        ])
    }


    componentDidMount() {
        this.props.app.ticker.add(this.tick)
    }

    componentWillUnmount() {
        this.props.app.ticker.remove(this.tick)
    }

    tick = delta => {

    }

    render() {
        const {vertices, uvs, indices} = this.state

        return (
            <Mesh texture={texture}
                  uvs={uvs}
                  vertices={vertices}
                  indices={indices}
                  drawMode={PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES}/>
        )
    }
}

const App = () => (
    <Stage width={w} height={h} options={{backgroundColor: 0xeef1f5}}>
        <AppConsumer>
            {app => <MeshExample app={app}/>}
        </AppConsumer>
    </Stage>
)

export default App