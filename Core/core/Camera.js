import core, { gl } from '../core.js'
import { Node2D } from '../objects/Node2D.js'

/**
 * @namespace core
 *
 * @description
 */

/**
 * @namespace core
 *
 * @description
 */
export class Camera extends Node2D {
  constructor() {
    super('Camera')

    this.projection = core.Matrix4x4.OrthoGraphic(
      0,
      gl.canvas.width,
      gl.canvas.height,
      0,
      1000,
      -10
    )

    this.model = this.transform.GetMatrix()
  }

  Recalculate() {
    this.projection = core.Matrix4x4.OrthoGraphic(
      0,
      gl.canvas.width,
      gl.canvas.height,
      0,
      1000,
      -10
    )

    this.model = this.transform.GetMatrix()
  }

  GetMatrix() {
    this.Recalculate()
    return core.Matrix4x4.Multiply(this.projection, this.model).ToFloat32Array()
  }
}
