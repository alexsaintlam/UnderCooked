import plateImg from "../images/plates2.png";

class Plate {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height - 39;  

        this.sprite = {
            x: 20,
            y: 40,
            width: 14,
            height: 13,
            frameX: 0,
            speed: 8,
        };

        this.pickedStatus = false;
        this.key = [];
        this.contents = [];
        this.visible = true;

        this.plateSprite = new Image();
        this.plateSprite.src = plateImg;           
    }

    animate() {
        this.drawSprite(this.plateSprite, 
            this.sprite.width * this.sprite.frameX, 0, 
            this.sprite.width, this.sprite.height, 
            this.sprite.x, this.sprite.y, 
            this.sprite.width, this.sprite.height);  
        this.movePlayer();
        this.spriteFrame();
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

    placedContent(e, food) {
        if (e.keyCode === 32 && !this.contents.includes(food)) {
            this.contents.push(food);
            return true;
        }
    }

    spriteFrame() {
        this.sprite.frameX = this.contents.length;
    }
}

export default Plate;