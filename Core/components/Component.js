import { Node2D } from '../objects/Node2D.js'

export class Component {
  constructor(name) {
    this.name = name

    /** @type {Node2D} */
    this.parent
  }

  Init() {}

  Render() {}

  Update() {}
}
