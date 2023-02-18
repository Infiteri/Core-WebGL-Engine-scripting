import core from '../Core/core.js'
import { CameraController } from '../scripts/CameraController.js'
import { GameManager } from '../scripts/GameManager.js'

/**
 * @namespace core
 *
 * @description
 */
export default class Application {
  constructor() {
    this.engine = new core.Engine()
    this.renderer = this.engine.renderer

    //Upload texture for easy use
    core.TextureManager.Upload(new core.Texture('Mat', '/Assets/crate.png'))
    this.color = new core.TextureMaterial(
      'Mats',
      'Mat',
      new core.Color(255, 255, 255)
    )
    core.MaterialManager.Upload(this.color)

    this.scene = new core.Scene()
    this.engine.camera.AddScript(new CameraController())
    this.scene.root.AddScript(new GameManager())

    this.renderer.ChangeScene(this.scene)
  }

  /** @private */
  Init() {
    this.engine.Init()
  }

  /** @private */
  Render() {
    this.engine.Render()
  }

  /** @private */
  Update() {
    this.engine.Update()
  }

  /** @private */
  Loop() {
    this.Render()
    this.Update()

    //Temporary camera movement

    requestAnimationFrame(this.Loop.bind(this))
  }

  Run() {
    this.Init()
    this.Loop()
  }
}
