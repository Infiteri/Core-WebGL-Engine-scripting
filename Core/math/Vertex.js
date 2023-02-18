import core from '../core.js'

export class Vertex {
  position = core.Vector3.ZERO()
  texCoords = core.Vector2.ZERO()

  constructor(x = 0, y = 0, z = 0, u = 0, v = 0) {
    this.position.x = x
    this.position.y = y
    this.position.z = z

    this.texCoords.x = u
    this.texCoords.y = v
  }

  ToArray() {
    let array = []

    array = array.concat(this.position.ToArray())
    array = array.concat(this.texCoords.ToArray())

    return array
  }

  ToFloat32Array() {
    return new Float32Array(this.ToArray())
  }
}
