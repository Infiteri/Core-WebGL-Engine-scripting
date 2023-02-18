/**
 * @abstract
 */

/**
 * @namespace core
 *
 * @description
 */
export class Layer {
  constructor() {}

  OnAttach() {}

  OnDetach() {}

  OnUpdate() {}

  /** @abstract */
  Attach() {
    this.OnAttach()
  }

  /** @abstract */
  Detach() {
    this.OnDetach()
  }

  /** @abstract */
  Update() {
    this.OnUpdate
  }
}
