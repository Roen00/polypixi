import {Mesh} from "@inlet/react-pixi";
import React from "react";

export const Polygon = ({vertices, uvs, texture}) =>
    <Mesh texture={texture}
          uvs={uvs}
          vertices={vertices}
          indices={new Uint16Array([0, 1, 2])}
        />
