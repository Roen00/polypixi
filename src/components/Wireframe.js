import Triangle from "./Triangle";
import React from "react";


export const Wireframe = ({vertices, scale}) =>
    <Triangle
        scale={scale}
        vertices={vertices}
        thickness={1}
    />