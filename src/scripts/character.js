import player from "../images/hulk.png";

class Character {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;

        this.sprite = {
            x: 0,
            y: 0,
            width: 40,
            height: 56,
            frameX: 0,
            frameY: 0,
            speed: 9,
            moving: false
        };

        this.playerSprite = new Image();
        this.playerSprite.src = player;

        this.key = [];
    }

    animate() {
        this.drawSprite(this.playerSprite, 0, 0, this.sprite.width, this.sprite.height, 200, 200, this.sprite.width, this.sprite.height);  
    }

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    // keyDownHandler(e) {
        // this.key[e.keyCode] = true;
        // console.log(this.key);
    // }
}

export default Character;