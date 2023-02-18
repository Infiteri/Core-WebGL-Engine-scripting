import core from '../core.js'
import { Component } from './Component.js'

export class MeshComponent extends Component {
  constructor(name, materialName) {
    super(name)

    this.transform = new core.Transform()

    /** @private */
    this._mesh = new core.Mesh(materialName)
  }

  Bottom(safeMargin = 0) {
    return (this.transform.position.y + this.mesh.height + safeMargin)
  }

  get mesh() {
    return this._mesh
  }

  Init() {
    this._mesh.Init()
  }

  Render() {
    const model = core.Matrix4x4.Multiply(
      this.parent.worldMatrix,
      this.transform.GetMatrix()
    )
    this._mesh.Render(model)
  }

  Update() {}
}
