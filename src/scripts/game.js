import Character from "./character";

class UnderCooked {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.character = new Character(this.dimensions, this.ctx);
        this.animate()
        this.registerEvents();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.character.animate();
        requestAnimationFrame(this.animate.bind(this));
    }

    registerEvents() {
        window.addEventListener("keydown", this.keyDownHandler.bind(this))
        window.addEventListener("keyup", this.keyUpHandler.bind(this))
    }

    keyDownHandler(e) {
        this.character.keyDown(e);
    }

    keyUpHandler(e) {
        this.character.keyUp(e);
    }
}

export default UnderCooked;