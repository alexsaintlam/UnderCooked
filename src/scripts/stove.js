import stoveImg from "../images/stove.png";

class Stove {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;

        this.sprite = {
            x: 56,
            y: 37,
            width: 17,
            height: 27,
            frameX: 1
        };

        this.cookingItems = [];

        this.stoveSprite = new Image();
        this.stoveSprite.src = stoveImg;
    }

    animate() {
        this.drawSprite(this.stoveSprite, 
            this.sprite.width * this.sprite.frameX, 0, 
            this.sprite.width, this.sprite.height, 
            this.sprite.x, this.sprite.y, 
            this.sprite.width, this.sprite.height);  
        this.spriteFrame()
    }

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    isCooking(e) {
        if (e.keyCode === 32 && this.cookingItems.length < 1) {
            this.cookingItems.push("sauce");
            return true;
        } else {
            return false;
        }
    }

    spriteFrame() {
        this.sprite.frameX = this.cookingItems.length;
    }
}

export default Stove;