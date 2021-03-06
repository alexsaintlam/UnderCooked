import pizzaImg from "/src/images/plate2.png";

class Pizza {
    constructor(dimensions, ctx, type) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;  

        this.sprite = {
            x: 145,
            y: 43,
            width: 14,
            height: 13,
            speed: 8,
        };

        this.type = type;
        this.pickedStatus = false;
        this.pickedCount = 0;
        this.visible = false;
        this.key = [];

        this.pizzaSprite = new Image();
        this.pizzaSprite.src = pizzaImg;
    }

    animate() {
        this.drawSprite(this.pizzaSprite, 0, 0, 
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
        if (this.key[83] && this.sprite.y < this.y - this.sprite.height - 20) {
            this.sprite.y += this.sprite.speed }
    }
}

export default Pizza;