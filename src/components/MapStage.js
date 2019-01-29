import {PolygonTexture} from "./PolygonTexture";
import {Stage} from "@inlet/react-pixi";
import {MapViewportWithApp} from "./MapViewport";
import {Polygon} from "./Polygon";
import React from "react";

import * as _ from 'underscore';
import {Wireframe} from "./Wireframe";

export class MapStage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 1,
            w: props.w,
            h: props.h
        }
    }

    componentDidMount() {
        console.log("mounted")
        fetch("http://localhost:8080/maps")
            .then(res => res.json())
            .then(
                (polygons) => {
                    let newPolygons = polygons.map(
                        polygon => (
                            {
                                vertices: new Float32Array(_.flatten(polygon.vertices.map(vertex => [vertex.x, vertex.y]))),
                                uvs: new Float32Array(_.flatten(polygon.vertices.map(vertex => [vertex.tu, vertex.tv])))
                            }
                        )
                    ).slice(2)
                    console.log(newPolygons)
                    this.setState((oldState) => ({
                        ...oldState,
                        polygons: newPolygons
                    }));
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    updateScaleOnZoom = (zoomEvent) => this.setState((prevState) => ({...prevState, scale: zoomEvent.viewport.scale.x}));

    render() {
        const image = 'https://i.imgur.com/xjRzJAD.png'
        const texture = PolygonTexture({image: image});
        return (
            <Stage width={this.state.w} height={this.state.h} options={{backgroundColor: 0x000000}}>
                <MapViewportWithApp
                    screenWidth={this.state.w}
                    screenHeight={this.state.h}
                    worldWidth={this.state.w * 2}
                    worldHeight={this.state.h * 2}
                    onZoomed={this.updateScaleOnZoom}>
                    {this.state.polygons && this.state.polygons.map(polygon =>
                        <Polygon
                            indices={new Uint16Array([0, 1, 2])}
                            uvs={polygon.uvs}
                            vertices={polygon.vertices}
                            texture={texture}
                        />)
                    }
                    {this.state.polygons && this.state.polygons.map(polygon =>
                        <Wireframe
                            vertices={polygon.vertices}
                            scale={this.state.scale}
                        />)
                    }
                </MapViewportWithApp>
            </Stage>
        )
    }

}