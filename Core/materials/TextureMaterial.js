import core, { gl } from '../core.js'
import { Material } from './Material.js'

/**
 * @namespace core
 *
 * @description
 */
export class TextureMaterial extends Material {
  constructor(name, textureName, tint) {
    super(name)

    this.texture = core.TextureManager.Get(textureName)
    this.tint = tint
  }

  Init(mesh) {
    this.shader = core.ShaderManager.Get('TextureShader')

    mesh.width = this.texture.image.width
    mesh.height = this.texture.image.height
  }

  UploadModel(model) {
    this.shader.UploadMat4('uTransformMatrix', model)
  }

  Render(mesh) {
    this.shader.Use()

    this.shader.UploadVec4v('uTint', this.tint.ToFloat32Array())
    this.texture.Activate()

    this.shader.Upload1i('sampler', this.texture.GetUnit())
  }
}

/**
 * Upload to the texture manager (name, src)
 *
 * Upload a texture material with its unique name, texture name, tint
 */
