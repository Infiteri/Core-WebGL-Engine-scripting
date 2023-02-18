/**
 * @namespace core
 *
 * @description
 */
export class Keyboard {
  static currentKey = ''

  static Init() {
    addEventListener('keydown', ({ code }) => {
      Keyboard.currentKey = code
    })

    addEventListener('keyup', () => {
      Keyboard.currentKey = ''
    })
  }

  static GetKey() {
    return Keyboard.currentKey
  }

  static IsKeyDown(code) {
    return Keyboard.currentKey === code
  }
}
