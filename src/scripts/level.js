import background from "../images/background.png";

class Level {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;

        this.background = new Image();
        this.background.src = background;
    }

    animate() {
        this.ctx.drawImage(this.background, 0, 0, this.x, this.y);
    }

}

export default Level;