import {PolygonTexture} from "./PolygonTexture";
import {Stage} from "@inlet/react-pixi";
import {MapViewportWithApp} from "./MapViewport";
import {Polygon} from "./Polygon";
import React from "react";


export class MapStage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 1,
            w: props.w,
            h: props.h
        }
    }

    onZoomed = (a) => {
        this.setState((prevState) => {
            let newVar = ({...prevState, scale: a.viewport.scale.x});
            console.log(newVar)
            return newVar
        })
    };

    render() {
        const image = 'https://i.imgur.com/xjRzJAD.png'
        const texture = PolygonTexture({image: image});
        const props = {
            indices: new Uint16Array([0, 1, 2]),
            uvs: new Float32Array([0, 0, 0, 2, 1, 0]),
            vertices: new Float32Array([0, 0, 0, this.state.h, this.state.w, 0]),
            texture: texture,
            scale: this.state.scale
        }
        const props2 = {
            indices: new Uint16Array([0, 1, 2]),
            uvs: new Float32Array([0, 0, 0, 2, 1, 0]),
            vertices: new Float32Array([this.state.w, this.state.h, this.state.w, 0, 0, 0]),
            texture: texture,
            scale: this.state.scale
        }
        return (
            <Stage width={this.state.w} height={this.state.h} options={{backgroundColor: 0x000000}}>
                <MapViewportWithApp
                    screenWidth={this.state.w}
                    screenHeight={this.state.h}
                    worldWidth={this.state.w * 2}
                    worldHeight={this.state.h * 2}
                    onZoomed={this.onZoomed}>
                    <Polygon {...props}/>
                    <Polygon {...props2}/>
                </MapViewportWithApp>
            </Stage>
        )
    }

}