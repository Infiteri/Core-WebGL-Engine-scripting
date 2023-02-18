/** Main house for the imports */

import { Engine } from './core/Engine.js'
import { Logger } from './log/Log.js'
import { EventType, Event } from './event/Event.js'
import { Keyboard } from './event/Keyboard.js'
import { Window } from './core/Window.js'
import { Shader } from './webgl/Shader.js'
import { Buffer, Attribute } from './webgl/Buffer.js'
import { Matrix4x4 } from './math/Matrix4x4.js'
import { Vector3 } from './math/Vector3.js'
import { Mesh } from './objects/Mesh.js'
import { Camera } from './core/Camera.js'
import { Renderer } from './renderer/Renderer.js'
import { ShaderManager } from './manager/ShaderManager.js'
import { ColorShader } from './shaders/ColorShader.js'
import { ColorMaterial } from './materials/ColorMaterial.js'
import { Color } from './graphics/Color.js'
import { MaterialManager } from './manager/MaterialManager.js'
import { TextureMaterial } from './materials/TextureMaterial.js'
import { TextureShader } from './shaders/TextureShader.js'
import { Texture } from './graphics/Texture.js'
import { TextureManager } from './manager/TextureManager.js'
import { Sprite } from './objects/Sprite.js'
import { Transform } from './math/Transform.js'
import { Vertex } from './math/Vertex.js'
import { Vector2 } from './math/Vector2.js'
import { CoreEditor } from './editor/CoreEditor.js'
import { Scene } from './global/Scene.js'
import { Node2D } from './objects/Node2D.js'
import { MeshComponent } from './components/MeshComponent.js'

/**
 * GL CONTEXT
 */

/**
 * @namespace core
 *
 * @description
 */
export const gl = document.querySelector('canvas').getContext('webgl')

//Other
/**
 * @namespace core
 *
 * @description
 */

const core = {
  Window,
  Engine,
  Logger,
  Event,
  EventType,
  Keyboard,
  Shader,
  Buffer,
  Attribute,
  Matrix4x4,
  Vector3,
  Transform,
  Vertex,
  Mesh,
  Vector2,
  Camera,
  Renderer,
  Color,
  Texture,
  Sprite,

  //Managers
  ShaderManager,
  MaterialManager,
  TextureManager,

  //shaders
  ColorShader,
  TextureShader,

  //materials
  ColorMaterial,
  TextureMaterial,

  CoreEditor,
  Scene,
  Node2D,

  //Components
  MeshComponent,
}

/**
 * @namespace core
 *
 * @description
 */
export default core
