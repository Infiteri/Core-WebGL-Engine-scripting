import core from '../core.js'

/**
 * @namespace core
 *
 * @description
 */
export class ShaderManager {
  static shaders = {}

  static Init() {
    ShaderManager.Upload(new core.ColorShader('ColorShader'))
    ShaderManager.Upload(new core.TextureShader('TextureShader'))
  }

  static Upload(shader) {
    const exists = ShaderManager.shaders[shader.name] !== undefined

    if (exists) {
      core.Logger.Warn('Unable to upload shader bcz was found: ' + shader.name)
      return
    } else {
      ShaderManager.shaders[shader.name] = shader
    }
  }

  static Get(name) {
    const exists = ShaderManager.shaders[name] !== undefined

    if (!exists) {
      core.Logger.Fatal('Unable to get shader bcz was not found: ' + name)
      return
    } else {
      return ShaderManager.shaders[name]
    }
  }

  static Update(camera) {
    Object.values(ShaderManager.shaders).forEach(s => {
      s.Use()
      s.UploadMat4('uCameraMatrix', camera.GetMatrix())
    })
  }
}
