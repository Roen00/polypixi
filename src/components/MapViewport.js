import * as Viewport from 'pixi-viewport'
import {PixiComponent} from "@inlet/react-pixi";

export const MapViewport = PixiComponent('MapViewport', {
    create: (props) => {
        let viewport = new Viewport(props);
        viewport.drag().pinch().wheel().decelerate();
        return viewport
    }
})