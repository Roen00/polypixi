import * as PIXI from "pixi.js";

export const PolygonTexture = ({image}) => {
    const texture = new PIXI.Texture.from(image)
    texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    return texture
}