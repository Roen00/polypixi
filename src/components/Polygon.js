import {Container, Mesh} from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import Triangle from "./Triangle";
import React from "react";

export const Polygon = ({vertices, uvs, indices, texture, scale}) =>
    <Container>
        <Mesh texture={texture}
              uvs={uvs}
              vertices={vertices}
              indices={indices}
              drawMode={PIXI.mesh.Mesh.DRAW_MODES.LINES}/>
        <Triangle scale={scale} vertices={vertices}/>
    </Container>
