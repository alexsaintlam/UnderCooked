import player from "../images/chef.png";

class Character {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;

        this.sprite = {
            x: 50,
            y: 50,
            width: 16,
            height: 32,
            frameX: 0,
            frameY: 0,
            speed: 8,
            startPos: 0
        };

        this.pickedStatus = false;
        this.key = [];

        this.playerSprite = new Image();
        this.playerSprite.src = player;
    }

    animate() {
        this.drawSprite(this.playerSprite, 
            (this.sprite.width * this.sprite.frameX) + this.sprite.startPos, 
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
    }

    keyUp(e) {
        delete this.key[e.keyCode];
        this.sprite.frameY = 1;
    }

    movePlayer() {
        if (this.key[68] && this.sprite.x < this.x - this.sprite.height) {
            this.sprite.x += this.sprite.speed
            this.sprite.startPos = 0;
            this.sprite.frameY = 2 }
        if (this.key[65] && this.sprite.x > 0) {
            this.sprite.x -= this.sprite.speed
            this.sprite.startPos = 192;
            this.sprite.frameY = 2 }
        if (this.key[87] && this.sprite.y > 0) {
            this.sprite.y -= this.sprite.speed
            this.sprite.startPos = 96;
            this.sprite.frameY = 2 }
        if (this.key[83] && this.sprite.y < this.y - this.sprite.height) {
            this.sprite.y += this.sprite.speed
            this.sprite.startPos = 288;
            this.sprite.frameY = 2 }
    }

    playerFrame() {
        if (this.sprite.frameX < 5) {
            this.sprite.frameX += 1
        } else {
            this.sprite.frameX = 0;
        }
    }

    pickedUp(e) {
        if (e.keyCode === 32 && this.pickedStatus === false) {
            this.pickedStatus = true;
        } else if (e.keyCode === 32 && this.pickedStatus === true) {
            this.pickedStatus = false;
        }
    }
}

export default Character;