import { gl } from '../core.js'

/**
 * @namespace core
 *
 * @description
 */
export class Window {
  constructor() {
    //Reference
    this.canvas = document.querySelector('canvas')

    //Data
    this.width = innerWidth
    this.height = innerHeight
    this.title = 'Hello World'

    this.UpdateData()

    this.Resize()
  }

  OnResize() {}

  /** @private */
  Resize() {
    window.onresize = () => {
      //Reassign the width and height
      this.width = innerWidth
      this.height = innerHeight

      //Update the data (canvas width and height, viewport and title)
      this.UpdateData()

      //Callback for extra on window resizing
      this.OnResize()
    }
  }

  Init() {}

  Render() {
    //Main BG Clearing
  }

  Update() {}

  /** @private */
  UpdateData() {
    document.title = this.title

    //Size handling
    this.canvas.width = this.width
    this.canvas.height = this.height
    gl.viewport(0, 0, this.width, this.height)
  }
}
