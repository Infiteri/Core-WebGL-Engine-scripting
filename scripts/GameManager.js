import core, { gl } from '../Core/core.js'
import { BaseScript } from '../Core/script/BaseScript.js'

let g = 0

export class GameManager extends BaseScript {
  node = new core.Node2D('Node')
  meshComponent = new core.MeshComponent('MeshComponent', 'Mats')

  OnInit() {
    this.node.AddComponent(this.meshComponent)

    this.AddNode(this.node)
  }

  OnUpdate() {}
}
