import {Container, Mesh} from "@inlet/react-pixi";
import Triangle from "./Triangle";
import React from "react";

export const Polygon = ({vertices, uvs, indices, texture, scale}) =>
    <Container>
        <Mesh texture={texture}
              uvs={uvs}
              vertices={vertices}
              indices={indices}
        />
        <Triangle
            scale={scale}
            vertices={vertices}
            thickness={5}
        />
    </Container>
