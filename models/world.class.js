"use strict";

class World {
  character = new Character();
  enemies = level1.enemies;
  clouds = level1.clouds;
  backgroundObjects = level1.backgroundObjects;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.clouds);
    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);
    requestAnimationFrame(() => this.draw());
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(mapObject) {
    if (mapObject.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mapObject.width, 0);
      this.ctx.scale(-1, 1);
      mapObject.x = mapObject.x * -1;
    }
    this.ctx.drawImage(
      mapObject.img,
      mapObject.x,
      mapObject.y,
      mapObject.width,
      mapObject.height
    );
    if (mapObject.otherDirection) {
      mapObject.x = mapObject.x * -1;
      this.ctx.restore();
    }
  }
}
