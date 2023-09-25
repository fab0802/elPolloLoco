'use strict';

const level1 = new Level(
  [
    new BackgroundObjects('img/5_background/layers/air.png', -719),
    new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', -719),
    new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', -719),
    new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', -719),

    new BackgroundObjects('img/5_background/layers/air.png', 0),
    new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 0),
    new BackgroundObjects('img/5_background/layers/air.png', 719),
    new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', 719),
    new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', 719),
    new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', 719),

    new BackgroundObjects('img/5_background/layers/air.png', 719 * 2),
    new BackgroundObjects(
      'img/5_background/layers/3_third_layer/1.png',
      719 * 2
    ),
    new BackgroundObjects(
      'img/5_background/layers/2_second_layer/1.png',
      719 * 2
    ),
    new BackgroundObjects(
      'img/5_background/layers/1_first_layer/1.png',
      719 * 2
    ),
    new BackgroundObjects('img/5_background/layers/air.png', 719 * 3),
    new BackgroundObjects(
      'img/5_background/layers/3_third_layer/2.png',
      719 * 3
    ),
    new BackgroundObjects(
      'img/5_background/layers/2_second_layer/2.png',
      719 * 3
    ),
    new BackgroundObjects(
      'img/5_background/layers/1_first_layer/2.png',
      719 * 3
    ),
  ],
  [new Chicken(), new Chicken(), new Chicken()],
  [new Cloud()]
);
