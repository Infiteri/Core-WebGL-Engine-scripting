import core from '../core.js'

/**
 * @namespace core
 *
 * @description
 */

/**
 * @namespace core
 *
 * @description
 */
export class Engine {
  /**
   * Initializes the main events
   */
  constructor() {
    core.Event.Init()
    core.Keyboard.Init()
    core.ShaderManager.Init()

    this.editor = new core.CoreEditor()
    this.window = new core.Window()
    this.camera = new core.Camera()
    this.renderer = new core.Renderer(this.camera)
  }

  Init() {
    this.window.Init()
    this.renderer.Init()
  }

  Render() {
    this.window.Render()
    this.renderer.Render()

    core.ShaderManager.Update(this.camera)
  }

  Update() {
    this.window.Update()
    this.renderer.Update()
    this.camera.Update()
  }
}
