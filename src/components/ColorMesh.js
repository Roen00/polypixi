import {PixiComponent, withPixiApp} from "@inlet/react-pixi";
import * as PIXI from 'pixi.js'
function bufferToHex (buffer) {
    return Array
        .from (new Uint8Array (buffer))
        .map (b => b.toString (16).padStart (2, "0"))
        .join ("");
}
export const ColorMesh = PixiComponent('ColorMesh', {
    create: (props) => {
        const {texture, verticesColors} = props
        let mesh = new PIXI.heaven.mesh.Mesh(
            texture,
        )
        mesh.enableColors()
//BGR
        mesh.setRGB(verticesColors, false)

        console.log(bufferToHex(mesh.colors))
        mesh.color.invalidate();
/*
        // mesh.colors = new Uint32Array([128, 200, 30, 128, 200, 30, 128, 200, 30])

//BGR!!!!!!!!!!!!!!!!!!!!!!!!

        //lets make it randomy!
//         var len = mesh.vertices.length / 2;
//         var rgb = new Float32Array(len*3);
// //set light
//         for (var i=0;i<len*3;i++) rgb[i] = 0.5 + Math.random() * 0.5;
//         mesh.setRGB(rgb);
//set dark
*/

        // mesh.color.setLight(Math.random(), Math.random(), Math.random())
        return mesh
    }
})

