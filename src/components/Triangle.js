import * as PIXI from 'pixi.js'
import {PixiComponent} from '@inlet/react-pixi'

export default PixiComponent('Triangle', {
    create: props => {
        let g = new PIXI.Graphics();
        const {vertices: v} = props
        g.clear()
        g.lineStyle(1 / props.scale, 0xFFFFFF, 1);
        g.moveTo(v[0], v[1])
        g.lineTo(v[2], v[3])
        g.lineTo(v[4], v[5])
        g.lineTo(v[0], v[1])
        g.endFill()
        return g
    },
    didMount: (instance, parent) => {
        // apply custom logic on mount
    },
    willUnmount: (instance, parent) => {
        // clean up before removal
    },
    applyProps: (g, oldProps, props) => {
        const {vertices: v, scale} = props
        g.clear()
        g.lineStyle(1 / scale, 0xFFFFFF, 1);
        g.moveTo(v[0], v[1])
        g.lineTo(v[2], v[3])
        g.lineTo(v[4], v[5])
        g.lineTo(v[0], v[1])
        g.endFill()
    }
})