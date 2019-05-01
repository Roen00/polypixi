import {Mesh} from "@inlet/react-pixi";
import React from "react";
import {ColorMesh} from "./ColorMesh";


export const Polygon = ({vertices, uvs, texture, verticesColors}) => {
    // const mesh = <Mesh texture={texture}
    //                    uvs={uvs}
    //                    vertices={vertices}
    //                    indices={new Uint16Array([0, 1, 2])}
    // />;
    const colorMeshWithApp = <ColorMesh
        texture={texture}
        uvs={uvs}
        vertices={vertices}
        indices={new Uint16Array([0, 1, 2])}
        verticesColors={verticesColors}
    />;
    return (colorMeshWithApp)
}

