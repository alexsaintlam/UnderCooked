import Character from "./character";

class UnderCooked {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.character = new Character(this.dimensions, this.ctx);
        this.fpsInterval = "";
        this.then = "";
        this.startTime = "";
        this.now = "";
        this.then = "";
        this.elapsed = "";
        this.startAnimate(15);
        this.registerEvents();
    }

    startAnimate(fps) {
        this.fpsInterval = 1000 / fps;
        this.then = Date.now();
        this.startTime = this.then;
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.now = Date.now();
        this.elapsed = this.now - this.then;

        if (this.elapsed > this.fpsInterval) {
            this.then = this.now - (this.elapsed % this.fpsInterval);
            this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
            this.character.animate();
        }
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