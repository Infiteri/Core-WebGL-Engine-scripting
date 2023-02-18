import core from '../Core/core.js'
import { BaseScript } from '../Core/script/BaseScript.js'

export class CameraController extends BaseScript {
  OnInit() {}

  OnUpdate() {
    if (core.Keyboard.IsKeyDown('KeyA')) this.Translate(10)
    if (core.Keyboard.IsKeyDown('KeyD')) this.Translate(-10)
    if (core.Keyboard.IsKeyDown('KeyW')) this.Translate(0, 10)
    if (core.Keyboard.IsKeyDown('KeyS')) this.Translate(0, -10)
  }
}
