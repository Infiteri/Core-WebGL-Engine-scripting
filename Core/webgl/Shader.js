import core, { gl } from '../core.js'

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
export class Shader {
  constructor(name, vertexSource, fragmentSource) {
    this.name = name

    const vertexShader = this.LoadShader(gl.VERTEX_SHADER, vertexSource)
    const fragmentShader = this.LoadShader(gl.FRAGMENT_SHADER, fragmentSource)

    this.program = this.LoadProgram(vertexShader, fragmentShader)

    this.attributes = {}
    this.uniforms = {}

    this.DetectAttributes()
    this.DetectUniforms()
  }

  GetAttributeLocation(name) {
    if (this.attributes[name] === undefined)
      throw new Error(
        `Unable to find attribute: ${name} in shader named: ${this.name}`
      )

    return this.attributes[name]
  }

  GetUniformLocation(name) {
    if (this.uniforms[name] === undefined)
      throw new Error(
        `Unable to find uniform: ${name} in shader named: ${this.name}`
      )

    return this.uniforms[name]
  }

  //Uploading data utils
  UploadMat4(name, data) {
    this.Use()
    const loc = this.GetUniformLocation(name)
    gl.uniformMatrix4fv(loc, false, data)
  }

  UploadVec4v(name, data) {
    this.Use()
    const loc = this.GetUniformLocation(name)
    gl.uniform4fv(loc, data)
  }

  Upload1i(name, int) {
    this.Use()
    const loc = this.GetUniformLocation(name)
    gl.uniform1i(loc, int)
  }

  /** @private */
  DetectAttributes() {
    const count = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES)

    for (let i = 0; i < count; i++) {
      const attribute = gl.getActiveAttrib(this.program, i)

      if (!attribute) break

      this.attributes[attribute.name] = gl.getAttribLocation(
        this.program,
        attribute.name
      )
    }
  }

  /** @private */
  DetectUniforms() {
    const count = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS)

    for (let i = 0; i < count; i++) {
      const uniform = gl.getActiveUniform(this.program, i)

      if (!uniform) break

      this.uniforms[uniform.name] = gl.getUniformLocation(
        this.program,
        uniform.name
      )
    }
  }

  Use() {
    gl.useProgram(this.program)
  }

  Detach() {
    gl.useProgram(null)
  }

  /** @private */
  LoadProgram(vertexShader, fragmentShader) {
    const shaderProgram = gl.createProgram()
    gl.attachShader(shaderProgram, vertexShader)
    gl.attachShader(shaderProgram, fragmentShader)
    gl.linkProgram(shaderProgram)

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      core.Logger.Fatal(
        `Unable to initialize the shader program: ${gl.getProgramInfoLog(
          shaderProgram
        )}`
      )

      return null
    }

    return shaderProgram
  }

  /** @private */
  LoadShader(type, source) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      core.Logger.Fatal(
        `An error occurred compiling the shaders: ${gl.getShaderInfoLog(
          shader
        )}`
      )
      gl.deleteShader(shader)
      return null
    }

    return shader
  }
}
