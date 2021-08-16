import checkoutImg from "../images/checkout.png";

class Checkout {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;

        this.sprite = {
            x: 156,
            y: 97,
            width: 17,
            height: 16,
            frameY: 0
        };

        this.scoreArr = [];

        this.checkOutSprite = new Image();
        this.checkOutSprite.src = checkoutImg;
    }

    animate() {
        this.drawSprite(this.checkOutSprite, 
            0, this.sprite.height * this.sprite.frameY, 
            this.sprite.width, this.sprite.height, 
            this.sprite.x, this.sprite.y, 
            this.sprite.width, this.sprite.height);  
        this.spriteFrame()
    }

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    spriteFrame() {
        if (this.sprite.frameY < 2) {
            this.sprite.frameY += 1
        } else {
            this.sprite.frameY = 0;
        }
    }

    getPaid(e) {
        if (e.keyCode === 32) {
            this.scoreArr.push(10);
            return true;
        }
    }
}

export default Checkout;