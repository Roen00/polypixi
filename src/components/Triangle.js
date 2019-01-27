import * as PIXI from 'pixi.js'
import {PixiComponent} from '@inlet/react-pixi'

export default PixiComponent('Triangle', {
    create: props => {
        let g = new PIXI.Graphics();
        return g
    },
    applyProps: (g, oldProps, props) => {
        const {vertices: v, thickness} = props
        const thicknessWithDefault = thickness || 1;
        g.clear()
        g.lineStyle((thicknessWithDefault) / props.scale, 0xFFFFFF, 1);
        g.moveTo(v[0], v[1])
        g.lineTo(v[2], v[3])
        g.lineTo(v[4], v[5])
        g.lineTo(v[0], v[1])
        g.endFill()
    }
})