import player from "../images/hulk.png";

class Character {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;

        this.sprite = {
            x: 0,
            y: 0,
            width: 40,
            height: 56,
            frameX: 0,
            frameY: 0,
            speed: 8,
            moving: false
        };

        this.playerSprite = new Image();
        this.playerSprite.src = player;

        this.key = [];
    }

    animate() {
        this.drawSprite(this.playerSprite, 
            this.sprite.width * this.sprite.frameX,
            this.sprite.height * this.sprite.frameY, 
            this.sprite.width, this.sprite.height, 
            this.sprite.x, this.sprite.y, 
            this.sprite.width, this.sprite.height);  
        this.movePlayer();
        this.playerFrame();
    }

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    keyDown(e) {
        this.key[e.keyCode] = true;
        this.sprite.moving = true;
    }

    keyUp(e) {
        delete this.key[e.keyCode];
        this.sprite.moving = false;
    }

    movePlayer() {
        if (this.key[68] && this.sprite.x < this.x - this.sprite.height) {
            this.sprite.x += this.sprite.speed
            this.sprite.frameY = 2 
            this.sprite.moving = true }
        if (this.key[65] && this.sprite.x > 0) {
            this.sprite.x -= this.sprite.speed
            this.sprite.frameY = 1
            this.sprite.moving = true }
        if (this.key[87] && this.sprite.y > 0) {
            this.sprite.y -= this.sprite.speed
            this.sprite.frameY = 3
            this.sprite.moving = true }
        if (this.key[83] && this.sprite.y < this.y - this.sprite.height) {
            this.sprite.y += this.sprite.speed
            this.sprite.frameY = 0
            this.sprite.moving = true }
    }

    playerFrame() {
        if (this.sprite.frameX < 3 && this.sprite.moving) {
            this.sprite.frameX += 1
        } else {
            this.sprite.frameX = 0;
        }
    }
}

export default Character;