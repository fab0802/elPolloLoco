'use strict';

class BackgroundObjects extends MoveableObject {
  constructor(imagePath, x) {
    super();
    this.x = x;
    this.y = 0;
    this.width = 720;
    this.height = 480;
    this.loadImage(imagePath);
  }
}