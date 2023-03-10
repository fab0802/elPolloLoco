"use strict";

class StatusBar extends DrawableObject {
  images;

  constructor() {
    super();
    this.x = 30;
    this.width = 200;
    this.height = 60;
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    const path = this.images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage === 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
