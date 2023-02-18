import core, { gl } from '../core.js'

/**
 * @namespace core
 *
 * @description
 */
export class Texture {
  static unit = -1

  constructor(name, src) {
    Texture.unit++

    this.name = name
    this.image = new Image()
    this.handle = gl.createTexture()

    //Binding
    this.Bind()

    //Tex it
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([255, 255, 255, 255])
    )

    //Image onload handling
    this.image.onload = () => {
      const { width, height } = this.image

      this.Bind()

      //Re-tex it
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        this.image
      )

      //2 cases for image size
      if (this._IsPowerOf2(width) && this._IsPowerOf2(height)) {
        gl.generateMipmap(gl.TEXTURE_2D)
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      }

      this.filter = gl.NEAREST

      //Apply effect to both cases
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.filter)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.filter)
    }

    //Reach to the source
    this.image.src = src
  }

  /** @private */
  _IsPowerOf2(v) {
    return (v & (v - 1)) === 0
  }

  Bind() {
    gl.bindTexture(gl.TEXTURE_2D, this.handle)
  }

  Unbind() {
    gl.bindTexture(gl.TEXTURE_2D, null)
  }

  GetUnit() {
    return Texture.unit
  }

  Activate() {
    gl.activeTexture(gl.TEXTURE0 + Texture.unit)
    this.Bind()
  }
}
