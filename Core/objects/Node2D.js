import { Component } from '../components/Component.js'
import core from '../core.js'

export class Node2D {
  constructor(name, scene) {
    this.name = name
    this.scene = scene

    /** @type {Node2D} */
    this.parent = undefined

    this.transform = new core.Transform()

    this.localMatrix = core.Matrix4x4.Identity()
    this.worldMatrix = core.Matrix4x4.Identity()

    /** @type {Array.<Node2D>} */
    this.children = []

    /** @type {Array.<Component>} */
    this.components = []

    this.scripts = []
  }

  GetNode(name) {
    if (this.name === name) return this

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i]

      const result = child.GetNode(name)
      if (result) return result
    }
  }

  AddScript(script) {
    //Assign the scripts node parent
    script.parent = this

    //Init
    script.OnInit()

    //Ok
    this.scripts.push(script)
  }

  AddChild(node) {
    if (node instanceof Node2D) {
      node.parent = this
      node.Init()
      this.children.push(node)
    } else {
      core.Logger.Error(
        `Unable to add node: ${node.name}, not a Node2D instance`
      )
    }
  }

  AddComponent(component) {
    component.parent = this
    component.Init()
    this.components.push(component)
  }

  Init() {
    for (let i = 0; i < this.components.length; i++) {
      const c = this.components[i]
      c.Init()
    }

    for (let i = 0; i < this.scripts.length; i++) {
      const c = this.scripts[i]
      c.OnInit()
    }

    for (let i = 0; i < this.children.length; i++) {
      const c = this.children[i]
      c.Init()
    }
  }

  Render() {
    this.localMatrix = this.transform.GetMatrix()
    this.UpdateMatrix(this.parent ? this.parent.localMatrix : undefined)

    for (let i = 0; i < this.components.length; i++) {
      const c = this.components[i]
      c.Render()
    }

    for (let i = 0; i < this.children.length; i++) {
      const c = this.children[i]
      c.Render()
    }
  }

  Update() {
    for (let i = 0; i < this.components.length; i++) {
      const c = this.components[i]
      c.Update()
    }

    for (let i = 0; i < this.scripts.length; i++) {
      const c = this.scripts[i]
      c.OnUpdate()
    }

    for (let i = 0; i < this.children.length; i++) {
      const c = this.children[i]
      c.Update()
    }
  }

  UpdateMatrix(parentMatrix) {
    if (parentMatrix) {
      this.worldMatrix = core.Matrix4x4.Multiply(parentMatrix, this.localMatrix)
    } else {
      this.worldMatrix.CopyFrom(this.localMatrix)
    }
  }
}
