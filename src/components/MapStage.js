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

    updateScaleOnZoom = (zoomEvent) => this.setState((prevState) => ({...prevState, scale: zoomEvent.viewport.scale.x}));

    render() {
        const image = 'https://i.imgur.com/xjRzJAD.png'
        const texture = PolygonTexture({image: image});
        const props = {
            indices: new Uint16Array([0, 1, 2]),
            uvs: new Float32Array([-2.21875, 1.649999976158142, 2.1312499046325684, 1.6416666507720947, -0.199085995554924,
                3.2156503200531006]),
            vertices: new Float32Array([-322.50537109375, 381.84112548828125, 339.49462890625, 380.84112548828125, 0.640869140625, 569.7191772460938]),
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
                    onZoomed={this.updateScaleOnZoom}>
                    <Polygon {...props}/>
                </MapViewportWithApp>
            </Stage>
        )
    }

}