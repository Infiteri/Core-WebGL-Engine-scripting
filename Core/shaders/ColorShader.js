import { Shader } from '../webgl/Shader.js'
const vertex = `
    attribute vec3 aVertexPosition;
    attribute vec2 aTexCoords;

    uniform mat4 uCameraMatrix;
    uniform mat4 uTransformMatrix;

    varying vec2 vTexCoords;

    void main() {
        gl_Position = uCameraMatrix * uTransformMatrix * vec4(aVertexPosition, 1.0);

        vTexCoords = aTexCoords;
    }
`

const fragment = `
    precision mediump float;

    uniform vec4 uColor;

    void main() {
        gl_FragColor = uColor;
    }
`

/**
 * @namespace core
 *
 * @description
 */
export class ColorShader extends Shader {
  constructor(name) {
    super(name, vertex, fragment)
  }
}
