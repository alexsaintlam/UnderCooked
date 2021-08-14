import Character from "./character";
import Cheese from "./foods/cheese";
import Utility from "./utility";
import Level from "./level";
import Tomato from "./foods/tomato";
import Pepperoni from "./foods/pepperoni";
import Bread from "./foods/bread";
import Plate from "./plate";
import Oven from "./oven";

class UnderCooked {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.character = new Character(this.dimensions, this.ctx);
        this.oven = new Oven(this.dimensions, this.ctx);
        // this.cheese = new Cheese(this.dimensions, this.ctx);
        // this.tomato = new Tomato(this.dimensions, this.ctx);
        // this.pepperoni = new Pepperoni(this.dimensions, this.ctx);
        // this.bread = new Bread(this.dimensions, this.ctx);
        // this.plate = new Plate(this.dimensions, this.ctx);
        this.utility = new Utility();
        this.level = new Level(this.dimensions, this.ctx);
        this.cheeseArr = [];
        this.tomatoArr = [];
        this.pepperoniArr = [];
        this.breadArr = [];
        this.plateArr = [];
        this.counter = 0;

        for (let i = 0; i < 20; i++) {
            this.cheeseArr.push(new Cheese(this.dimensions, this.ctx)); 
            this.tomatoArr.push(new Tomato(this.dimensions, this.ctx));
            this.pepperoniArr.push(new Pepperoni(this.dimensions, this.ctx));
            this.breadArr.push(new Bread(this.dimensions, this.ctx));
            this.plateArr.push(new Plate(this.dimensions, this.ctx))
        }

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
            this.oven.animate();
            this.character.animate();
            
            if (!this.plateArr[this.counter].cooking) {
                this.plateArr[this.counter].animate();
            }

            if (!this.plateArr[this.counter].contents.includes("cheese")) {
                this.cheeseArr[this.counter].animate();
            }

            if (!this.plateArr[this.counter].contents.includes("tomato")) {
                this.tomatoArr[this.counter].animate();
            }

            if (!this.plateArr[this.counter].contents.includes("pepperoni")) {
                this.pepperoniArr[this.counter].animate();
            }

            if (!this.plateArr[this.counter].contents.includes("bread")) {
                this.breadArr[this.counter].animate();
            }
        }
    }

    registerEvents() {
        window.addEventListener("keydown", this.keyDownHandler.bind(this))
        window.addEventListener("keyup", this.keyUpHandler.bind(this))
    }

    keyDownHandler(e) {
        this.character.keyDown(e);
        
        if (this.utility.collision(this.character, this.cheeseArr[this.counter])) {  
            this.character.pickedUp(e);
            this.cheeseArr[this.counter].pickedUp(e);
                if (this.cheeseArr[this.counter].pickedStatus === true &&
                    this.character.pickedStatus === true) {
                    this.cheeseArr[this.counter].keyDown(e);
                }
        }

        if (this.utility.collision(this.character, this.tomatoArr[this.counter])) {  
            this.character.pickedUp(e);
            this.tomatoArr[this.counter].pickedUp(e);
                if (this.tomatoArr[this.counter].pickedStatus === true &&
                    this.character.pickedStatus === true) {
                    this.tomatoArr[this.counter].keyDown(e);
                }
        }

        if (this.utility.collision(this.character, this.pepperoniArr[this.counter])) {  
            this.character.pickedUp(e);
            this.pepperoniArr[this.counter].pickedUp(e);
                if (this.pepperoniArr[this.counter].pickedStatus === true &&
                    this.character.pickedStatus === true) {
                    this.pepperoniArr[this.counter].keyDown(e);
                }
        }

        if (this.utility.collision(this.character, this.plateArr[this.counter]) &&
            !this.utility.collision(this.cheeseArr[this.counter], this.plateArr[this.counter]) &&
            !this.utility.collision(this.tomatoArr[this.counter], this.plateArr[this.counter]) &&
            !this.utility.collision(this.breadArr[this.counter], this.plateArr[this.counter]) &&
            !this.utility.collision(this.pepperoniArr[this.counter], this.plateArr[this.counter])) {  
            this.character.pickedUp(e);
            this.plateArr[this.counter].pickedUp(e);
                if (this.plateArr[this.counter].pickedStatus === true &&
                    this.character.pickedStatus === true) {
                    this.plateArr[this.counter].keyDown(e);
                }
        }

        if (this.utility.collision(this.character, this.breadArr[this.counter])) {  
            this.character.pickedUp(e);
            this.breadArr[this.counter].pickedUp(e);
                if (this.breadArr[this.counter].pickedStatus === true &&
                    this.character.pickedStatus === true) {
                    this.breadArr[this.counter].keyDown(e);
                }
        }

        if (this.utility.collision(this.cheeseArr[this.counter], this.plateArr[this.counter])) {  
            this.plateArr[this.counter].placedContent(e, "cheese");
            if (this.plateArr[this.counter].placedContent && this.plateArr[this.counter].contents.includes("cheese")) {
                this.character.pickedStatus = false;
                this.cheeseArr[this.counter].sprite.x = 0;
                this.cheeseArr[this.counter].sprite.y = 0;
            }
        }

        if (this.utility.collision(this.tomatoArr[this.counter], this.plateArr[this.counter])) {  
            this.plateArr[this.counter].placedContent(e, "tomato");
            if (this.plateArr[this.counter].placedContent && this.plateArr[this.counter].contents.includes("tomato")) {
                this.character.pickedStatus = false;
                this.tomatoArr[this.counter].sprite.x = 0;
                this.tomatoArr[this.counter].sprite.y = 0;
            }
        }

        if (this.utility.collision(this.pepperoniArr[this.counter], this.plateArr[this.counter])) {  
            this.plateArr[this.counter].placedContent(e, "pepperoni");
            if (this.plateArr[this.counter].placedContent && this.plateArr[this.counter].contents.includes("pepperoni")) {
                this.character.pickedStatus = false;
                this.pepperoniArr[this.counter].sprite.x = 0;
                this.pepperoniArr[this.counter].sprite.y = 0;
            }
        }

        if (this.utility.collision(this.breadArr[this.counter], this.plateArr[this.counter])) {  
            this.plateArr[this.counter].placedContent(e, "bread");
            if (this.plateArr[this.counter].placedContent && this.plateArr[this.counter].contents.includes("bread")) {
                this.character.pickedStatus = false;
                this.breadArr[this.counter].sprite.x = 0;
                this.breadArr[this.counter].sprite.y = 0;
            }
        }

        if (this.utility.collision(this.oven, this.plateArr[this.counter]) &&
            this.plateArr[this.counter].contents.length >= 3 && this.plateArr[this.counter].cooked === false) {  
                if (this.oven.isCooking(e)) {
                    let that = this;
                    this.plateArr[this.counter].cooking = true;
                    this.character.pickedStatus = false;
                    this.plateArr[this.counter].sprite.x = 0;
                    this.plateArr[this.counter].sprite.y = 0;
                    this.counter += 1;
                    setTimeout(function() {
                        that.plateArr[this.counter - 1].cooking = false;
                        that.plateArr[this.counter - 1].sprite.x = 300;
                        that.plateArr[this.counter - 1].sprite.y = 40;
                        that.plateArr[this.counter - 1].cooked = true;
                        that.oven.cookingItems.shift();
                        }, 10000);
                }
        }
    }

    keyUpHandler(e) {
        this.character.keyUp(e);

        if (this.utility.collision(this.character, this.cheeseArr[this.counter])) {  
            this.cheeseArr[this.counter].keyUp(e);
        }

        if (this.utility.collision(this.character, this.tomatoArr[this.counter])) {  
            this.tomatoArr[this.counter].keyUp(e);
        }

        if (this.utility.collision(this.character, this.pepperoniArr[this.counter])) {  
            this.pepperoniArr[this.counter].keyUp(e);
        }

        if (this.utility.collision(this.character, this.breadArr[this.counter])) {  
            this.breadArr[this.counter].keyUp(e);
        }

        if (this.utility.collision(this.character, this.plateArr[this.counter])) {  
            this.plateArr[this.counter].keyUp(e);
        }
    }
}

export default UnderCooked;