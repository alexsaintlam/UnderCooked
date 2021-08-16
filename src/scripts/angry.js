import angryImg from "../images/angry1.png";

class Angry {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;

        this.sprite = {
            x: 64,
            y: 40,
            width: 16,
            height: 19,
            frameX: 0,
            speed: 8,
        };

        this.getMad = false;
        this.key = [];

        this.angrySprite = new Image();
        this.angrySprite.src = angryImg;
    }

    animate() {
        this.drawSprite(this.angrySprite, 
            this.sprite.width * this.sprite.frameX, 0,
            this.sprite.width, this.sprite.height, 
            this.sprite.x, this.sprite.y, 
            this.sprite.width, this.sprite.height);  
        this.movePlayer();

        if (this.getMad) {
            this.playerFrame();
        }
    }

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    keyDown(e) {
        this.key[e.keyCode] = true;
    }

    keyUp(e) {
        delete this.key[e.keyCode];
    }

    movePlayer() {
        if (this.key[68] && this.sprite.x < this.x - this.sprite.height) {
            this.sprite.x += this.sprite.speed }
        if (this.key[65] && this.sprite.x > 0) {
            this.sprite.x -= this.sprite.speed }
        if (this.key[87] && this.sprite.y > 0) {
            this.sprite.y -= this.sprite.speed }
        if (this.key[83] && this.sprite.y < this.y - this.sprite.height) {
            this.sprite.y += this.sprite.speed }
    }

    playerFrame() {
        if (this.sprite.frameX < 4) {
            this.sprite.frameX += 1
        } else {
            this.sprite.frameX = 0;
        }
    }

    youMad() {
        let that = this;
        this.getMad = true;
        setTimeout(function() {
            that.sprite.frameX = 0;
            that.getMad = false;}, 3000);
    }
}

export default Angry;