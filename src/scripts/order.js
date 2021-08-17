import pep from "../images/pep.png";
import plain from "../images/plain.png";

class Order {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width + 15;
        this.y = this.dimensions.height - 25;

        this.sprite = {
            x: 72,
            y: 0,
            width: 18,
            height: 16,
            frameX: 0,
            frameY: 0,
            speed: 1,
            startPos: 0
        };

        this.blocked = false;
        this.imgType = "";
        this.type = "plain";
        this.random();
        this.convertType();
        this.orderSprite = new Image();
        this.orderSprite.src = this.imgType; 
    }

    animate() {
        this.drawSprite(this.orderSprite, 
            (this.sprite.width * this.sprite.frameX) + this.sprite.startPos, 
            this.sprite.height * this.sprite.frameY,
            this.sprite.width, this.sprite.height, 
            this.sprite.x, this.sprite.y, 
            this.sprite.width, this.sprite.height);  
        this.movePlayer();
    }

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    movePlayer() {
        if (this.sprite.x > 0 && !this.blocked) {
            this.sprite.x -= this.sprite.speed
        }
    }

    random() {
        const randomNum = Math.floor(Math.random() * 2);
        if (randomNum === 0) {
            this.imgType = pep;
        } else {
            this.imgType = plain;
        }
    }

    convertType() {
        if (this.imgType === pep) {
            this.type = "pep";
        } else if (this.imgType === plain) {
            this.type = "plain"
        }
    }
}

export default Order;