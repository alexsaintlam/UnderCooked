import initial from "../images/background.png";

class Initial {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;

        this.initial = new Image();
        this.initial.src = initial;
    }

    animate() {
        this.ctx.drawImage(this.initial, 0, 0, this.x, this.y);
    }

}

export default Initial;