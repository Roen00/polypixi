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
        const wireframes = this.state.polygons && this.state.polygons.map(polygon =>
            <Wireframe
                vertices={polygon.vertices}
                scale={this.state.scale}
            />)
        const polygons = this.state.polygons && this.state.polygons.map(polygon =>
            <Polygon
                uvs={polygon.uvs}
                vertices={polygon.vertices}
                texture={texture}
            />)
        return (
            <Stage width={this.props.w} height={this.props.h} options={{backgroundColor: 0x000000}}>
                <MapViewportWithApp
                    screenWidth={this.props.w}
                    screenHeight={this.props.h}
                    worldWidth={this.props.w * 2}
                    worldHeight={this.props.h * 2}
                    onZoomed={this.updateScaleOnZoom}>
                    {polygons}
                    {wireframes}
                </MapViewportWithApp>
            </Stage>
        )
    }

}