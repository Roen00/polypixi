import * as Viewport from 'pixi-viewport'
import {PixiComponent, withPixiApp} from "@inlet/react-pixi";


const MapViewport = PixiComponent('MapViewport', {
    create: (props) => {
        let viewport = new Viewport({
            interaction: props.app.renderer.plugins.interaction,
            ...props
        })
        viewport.drag().pinch().wheel().decelerate();
        return viewport
    }
})

export const MapViewportWithApp = withPixiApp(MapViewport)
