/**
 * @namespace core
 *
 * @description
 */
export class Logger {
  static Log(data) {
    const h1 = document.createElement('h1')
    const div = document.querySelector('.debugger')

    h1.innerText = data

    div.appendChild(h1)
  }

  static Warn(data) {
    const h1 = document.createElement('h1')
    const div = document.querySelector('.debugger')

    h1.innerText = data
    h1.style.color = 'yellow'

    div.appendChild(h1)
  }

  static Error(data) {
    const h1 = document.createElement('h1')
    const div = document.querySelector('.debugger')

    h1.innerText = data
    h1.style.color = 'red'

    div.appendChild(h1)
  }

  static Fatal(data) {
    const h1 = document.createElement('h1')
    const div = document.querySelector('.debugger')

    h1.innerText = data
    h1.style.color = 'red'

    div.appendChild(h1)

    throw new Error(data)
  }
}
