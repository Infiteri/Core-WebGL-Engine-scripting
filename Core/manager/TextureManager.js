import core from '../core.js'
import { Texture } from '../graphics/Texture.js'

/**
 * @namespace core
 *
 * @description
 */
export class TextureManager {
  /** @type {Object.<string, Texture>} */
  static textures = {}

  /**
   * @param {Texture} texture
   */
  static Upload(texture) {
    const exists = TextureManager.textures[texture.name] !== undefined

    if (exists) {
      core.Logger.Warn('Unable to upload texture: ' + texture.name + ' exits')
    } else {
      TextureManager.textures[texture.name] = texture
    }
  }

  static Get(name) {
    const texture = TextureManager.textures[name]

    if (!texture) {
      core.Logger.Fatal('Cant return texture: ' + name + ' does not exist')
    } else {
      return texture
    }
  }
}
