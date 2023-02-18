/**
 * @namespace core
 *
 * @description
 */
export class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  static ZERO() {
    return new Vector3(0, 0, 0)
  }
  static ONE() {
    return new Vector3(1, 1, 1)
  }

  ToArray() {
    return [this.x, this.y, this.z]
  }

  ToFloat32Array() {
    return new Float32Array(this.ToArray())
  }

  CopyFrom(vector) {
    this.x = vector.x
    this.y = vector.y
    this.z = vector.z
  }

  /**
   * Automatically handles JSON File for positioning
   * @param {any} json - The File Itself
   */
  SetFromJSON(json) {
    if (json.x !== undefined) this.x = Number(json.x)
    if (json.y !== undefined) this.y = Number(json.y)
    if (json.z !== undefined) this.z = Number(json.z)
  }

  Add(v) {
    this.x += v.x
    this.y += v.y
    this.z += v.z

    return this
  }

  Subtract(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z

    return this
  }

  Multiply(v) {
    this.x *= v.x
    this.y *= v.y
    this.z *= v.z

    return this
  }

  Divide(v) {
    this.x /= v.x
    this.y /= v.y
    this.z /= v.z

    return this
  }
}
