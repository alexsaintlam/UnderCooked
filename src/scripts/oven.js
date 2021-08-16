import ovenImg from "../images/oven.png";

class Oven {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;

        this.sprite = {
            x: 94,
            y: 21,
            width: 33,
            height: 42,
            frameX: 0
        };

        this.cookingItems = [];

        this.ovenSprite = new Image();
        this.ovenSprite.src = ovenImg;
    }

    animate() {
        this.drawSprite(this.ovenSprite, 
            this.sprite.width * this.sprite.frameX, 0, 
            this.sprite.width, this.sprite.height, 
            this.sprite.x, this.sprite.y, 
            this.sprite.width, this.sprite.height);  
        this.spriteFrame()
    }

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    isCooking(e, plate) {
        if (e.keyCode === 32 && this.cookingItems.length < 2 &&
            plate.contents.includes("cheese") &&
            plate.contents.includes("bread") &&
            plate.contents.includes("sauce") &&
            plate.contents.includes("pepperoni")) {
                this.cookingItems.push("pep");
                return true;
        } else if (e.keyCode === 32 && this.cookingItems.length < 2 &&
            plate.contents.includes("cheese") &&
            plate.contents.includes("bread") &&
            plate.contents.includes("sauce") &&
            !plate.contents.includes("pepperoni")) {
                this.cookingItems.push("plain");
                return true;
        } else {
            return false;
        }
    }

    spriteFrame() {
        this.sprite.frameX = this.cookingItems.length;
    }



}

export default Oven;