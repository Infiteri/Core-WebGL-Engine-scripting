import { Node2D } from '../objects/Node2D.js'

export class BaseScript {
  /** @type {Node2D} */
  parent = undefined

  OnInit() {}

  OnUpdate() {}

  Translate(x = 0, y = 0, z = 0) {
    this.parent.transform.position.x += x
    this.parent.transform.position.y += y
    this.parent.transform.position.z += z
  }

  AddNode(node) {
    this.parent.AddChild(node)
  }
}
