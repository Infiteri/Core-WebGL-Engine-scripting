import core from '../core.js'
import { Color } from '../graphics/Color.js'
import { Material } from './Material.js'

/**
 * @namespace core
 *
 * @description
 */
export class ColorMaterial extends Material {
  /**
   *
   * @param {string} name
   * @param {Color} color
   */
  constructor(name, color) {
    super(name)

    this.color = color
  }

  Init() {
    this.shader = core.ShaderManager.Get('ColorShader')
  }

  Render(mesh) {
    this.shader.Use()

    this.shader.UploadVec4v('uColor', this.color.ToFloat32Array())
  }

  UploadModel(data) {
    this.shader.UploadMat4('uTransformMatrix', data)
  }
}
