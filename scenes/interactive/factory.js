import {Sign} from "./sign.js";
import {BigSign} from "./bigsign.js";
import {Door} from "./door.js"

// To be able to do scene.add.sign(...)
Phaser.GameObjects.GameObjectFactory.register('sign', function (x, y, text, direction) {
	return new Sign(this.scene, x, y, text, direction);
})

// To be able to do scene.add.bigSign(...)
Phaser.GameObjects.GameObjectFactory.register('bigSign', function (x, y, tileHeight, tileWidth, signX, signY, sm_signX, sm_signY, text) {
	return new BigSign(this.scene, x, y, tileHeight, tileWidth, signX, signY, sm_signX, sm_signY, text);
})

// To be able to do scene.add.door(...)
Phaser.GameObjects.GameObjectFactory.register('door', function (x, y, height, width, destination, link) {
	return new Door(this.scene, x, y, height, width, destination, link);
})
