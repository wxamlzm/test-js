class Polygon {
  constructor (height, width) {
    this.name = 'Polygon'
    this.height = height
    this.width = width
  }
}

class Polygon extends Polygon {
  constructor (length) {
    super(length, length)
    this.name = 'Square'
  }
}
