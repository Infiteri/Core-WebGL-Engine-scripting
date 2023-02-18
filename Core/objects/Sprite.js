import core from '../core.js'

export class Sprite {
  constructor(name, material) {
    this.name = name

    this.transform = new core.Transform()

    this.width = 0
    this.height = 0

    //Animation
    this.frameX = 0
    this.frameY = 0

    this.frameCount = 2
    this.frameUVs = []

    //Buffering
    this.buffer = new core.Buffer(5)

    this.material = core.MaterialManager.Get(material)
  }

  Init() {
    this.material.Init(this)

    this.bufferData = [
      new core.Vertex(0, 0, 0, 0, 0),
      //
      new core.Vertex(0, this.height, 0, 0, 1),
      //
      new core.Vertex(this.width, this.height, 0, 1, 1),
      //
      new core.Vertex(this.width, this.height, 0, 1, 1),
      //
      new core.Vertex(this.width, 0, 0, 1, 0),
      //
      new core.Vertex(0, 0, 0, 0, 0),
    ]

    const { bufferData, buffer } = this

    for (let i = 0; i < data.length; i++) {
      const v = bufferData[i]
      buffer.PushBackData(v.ToArray())
    }

    this.buffer.AddAttribute(new core.Attribute(0, 0, 3))
    this.buffer.AddAttribute(new core.Attribute(1, 3, 2))
    this.buffer.Upload()
  }

  Render() {
    this.material.Render(this)

    this.buffer.Bind()
    this.buffer.Draw()
  }
}
