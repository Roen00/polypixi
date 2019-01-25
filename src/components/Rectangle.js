import * as PIXI from 'pixi.js'
import {PixiComponent} from '@inlet/react-pixi'

export default PixiComponent('Rectangle', {
    create: () => new PIXI.Graphics(),
    applyProps: (g, _, props) => {
        const {fill, x, y, width, height} = props

        g.clear()
        g.beginFill(fill)
        g.drawRect(x, y, width, height)
        g.endFill()
    }
})