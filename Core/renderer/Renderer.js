import core, { gl } from '../core.js'
import { Scene } from '../global/Scene.js'

/**
 * @class Main renderer class, for all the elements
 */

/**
 * @namespace core
 *
 * @description
 */
export class Renderer {
  /** @type {Scene} */
  currentScene = null

  /**
   *
   * @param {core.Camera} camera Main renderer camera (used for math)
   */
  constructor(camera) {
    this.camera = camera
  }

  SetClearColor(r, g, b) {
    gl.clearColor(r, g, b, 1)
  }

  Init() {
    gl.clearColor(0, 0, 0, 1)
    // gl.enable(gl.BLEND)
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    if (this.currentScene !== null) {
      this.currentScene.Init()
    }
  }

  ChangeScene(scene) {
    this.currentScene = scene
    this.currentScene.Init()
  }

  Update() {
    if (this.currentScene !== null) {
      this.currentScene.Update()
    }
  }

  Render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    if (this.currentScene !== null) {
      this.currentScene.Render()
    }
  }
}
