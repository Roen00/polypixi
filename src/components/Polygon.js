import {Mesh} from "@inlet/react-pixi";
import React from "react";

export const Polygon = ({vertices, uvs, indices, texture}) =>
    <Mesh texture={texture}
          uvs={uvs}
          vertices={vertices}
          indices={indices}
        />
