import pepperoniImg from "/src/images/pepperoni.png";

class Pepperoni {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height - 16;  

        this.sprite = {
            x: 118,
            y: 104,
            width: 16,
            height: 16,
            speed: 8,
        };

        this.pickedStatus = false;
        this.pickedCount = 0;
        this.visible = true;
        this.key = [];

        this.pepperoniSprite = new Image();
        this.pepperoniSprite.src = pepperoniImg;
    }

    animate() {
        this.drawSprite(this.pepperoniSprite, 0, 0, 
            this.sprite.width, this.sprite.height, 
            this.sprite.x, this.sprite.y, 
            this.sprite.width, this.sprite.height);  
        this.movePlayer();
    }

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    pickedUp(e) {
        if (e.keyCode === 32 && this.pickedStatus === false) {
            this.pickedStatus = true;
        } else if (e.keyCode === 32 && this.pickedStatus === true) {
            this.pickedStatus = false;
        }
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
        if (this.key[87] && this.sprite.y > 44) {
            this.sprite.y -= this.sprite.speed }
        if (this.key[83] && this.sprite.y < this.y - this.sprite.height) {
            this.sprite.y += this.sprite.speed }
    }
}

export default Pepperoni;