import core from '../core.js'

export class Scene {
  constructor() {
    this.root = new core.Node2D('__ROOT__', this)
  }

  AddChild(node) {
    this.root.AddChild(node)
  }

  GetNode(name) {
    return this.root.GetNode(name)
  }

  Init() {
    this.root.Init()
  }

  Render() {
    this.root.Render()
  }

  Update() {
    this.root.Update()
  }
}
