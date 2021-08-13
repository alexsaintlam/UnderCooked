import Character from "./character";

class UnderCooked {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.character = new Character(this.dimensions, this.ctx);
        this.animate()
        // this.registerEvents();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.character.animate();
        requestAnimationFrame(this.animate.bind(this));
    }

    // registerEvents() {
    //     this.ctx.canvas.addEventListener("keydown", this.character.keyDownHandler)
    //     this.ctx.canvas.addEventListener("keyup", )
    // }
}

export default UnderCooked;