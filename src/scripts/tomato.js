import tomatoImg from "../images/tomato.png";

class Tomato {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;  

        this.sprite = {
            x: 300,
            y: 100,
            width: 16,
            height: 16,
            speed: 8,
        };

        this.pickedStatus = false;
        this.key = [];

        this.tomatoSprite = new Image();
        this.tomatoSprite.src = tomatoImg;
    }

    animate() {
        this.drawSprite(this.tomatoSprite, 0, 0, 
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
        if (this.key[87] && this.sprite.y > 0) {
            this.sprite.y -= this.sprite.speed }
        if (this.key[83] && this.sprite.y < this.y - this.sprite.height) {
            this.sprite.y += this.sprite.speed }
    }
}

export default Tomato;