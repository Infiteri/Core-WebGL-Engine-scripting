export class Vector2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  ToArray() {
    return [this.x, this.y]
  }

  ToFloat32Array() {
    return new Float32Array(this.ToArray())
  }

  static ZERO() {
    return new Vector2(0, 0)
  }

  CopyFrom(v) {
    this.x = v.x
    this.y = v.y
  }
}
