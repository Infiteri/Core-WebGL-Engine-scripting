/**
 * @namespace core
 *
 * @description
 */
export class Color {
  constructor(r = 255, g = 255, b = 255, a = 1) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }

  ToArray() {
    return [this.r, this.g, this.b, this.a]
  }

  ToFloatArray() {
    return [this.r / 255, this.g / 255, this.b / 255, this.a]
  }

  ToFloat32Array() {
    return new Float32Array(this.ToFloatArray())
  }
}
