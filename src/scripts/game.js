import Character from "./character";
import Cheese from "./cheese";
import Utility from "./utility";
import Level from "./level";
import Tomato from "./tomato";

class UnderCooked {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.character = new Character(this.dimensions, this.ctx);
        this.cheese = new Cheese(this.dimensions, this.ctx);
        this.tomato = new Tomato(this.dimensions, this.ctx);
        this.utility = new Utility();
        this.level = new Level(this.dimensions, this.ctx);
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
            // this.level.animate();
            this.character.animate();
            this.cheese.animate();
            this.tomato.animate();
        }
    }

    registerEvents() {
        window.addEventListener("keydown", this.keyDownHandler.bind(this))
        window.addEventListener("keyup", this.keyUpHandler.bind(this))
    }

    keyDownHandler(e) {
        this.character.keyDown(e);
        
        if (this.utility.collision(this.character, this.cheese)) {  
            this.cheese.pickedUp(e);
                if (this.cheese.pickedStatus === true) {
                    this.cheese.keyDown(e);
                }
        }

        if (this.utility.collision(this.character, this.tomato)) {  
            this.tomato.pickedUp(e);
                if (this.tomato.pickedStatus === true) {
                    this.tomato.keyDown(e);
                }
        }


    }

    keyUpHandler(e) {
        this.character.keyUp(e);

        if (this.utility.collision(this.character, this.cheese)) {  
            this.cheese.keyUp(e);
        }

        if (this.utility.collision(this.character, this.tomato)) {  
            this.tomato.keyUp(e);
        }
    }
}

export default UnderCooked;