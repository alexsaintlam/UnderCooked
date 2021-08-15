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

            this.cheeseArr[this.counter + 1].animate();
            this.tomatoArr[this.counter + 1].animate();
            this.pepperoniArr[this.counter + 1].animate();
            this.breadArr[this.counter + 1].animate();
            this.plateArr[this.counter + 1].animate();

            if (this.plateArr[this.counter - 1]) {
                if (!this.plateArr[this.counter - 1].cooking) {
                    this.plateArr[this.counter - 1].animate();
                }
            }
            
            if (!this.plateArr[this.counter].cooking) {
                this.plateArr[this.counter].animate();
            }

            this.utility.plateAnimate(this.plateArr[this.counter], this.cheeseArr[this.counter], "cheese");
            this.utility.plateAnimate(this.plateArr[this.counter], this.tomatoArr[this.counter], "tomato");
            this.utility.plateAnimate(this.plateArr[this.counter], this.pepperoniArr[this.counter], "pepperoni");
            this.utility.plateAnimate(this.plateArr[this.counter], this.breadArr[this.counter], "bread");
        }
    }

    registerEvents() {
        window.addEventListener("keydown", this.keyDownHandler.bind(this))
        window.addEventListener("keyup", this.keyUpHandler.bind(this))
    }

    keyDownHandler(e) {
        this.character.keyDown(e);

        this.utility.charIngCollision(this.character, this.cheeseArr, this.counter, e);
        this.utility.charIngCollision(this.character, this.tomatoArr, this.counter, e);
        this.utility.charIngCollision(this.character, this.pepperoniArr, this.counter, e);
        this.utility.charIngCollision(this.character, this.breadArr, this.counter, e);

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

        this.utility.plateCollision(this.character, this.cheeseArr[this.counter], this.plateArr[this.counter], "cheese", e);
        this.utility.plateCollision(this.character, this.tomatoArr[this.counter], this.plateArr[this.counter], "tomato", e);
        this.utility.plateCollision(this.character, this.pepperoniArr[this.counter], this.plateArr[this.counter], "pepperoni", e);
        this.utility.plateCollision(this.character, this.breadArr[this.counter], this.plateArr[this.counter], "bread", e)

        if (this.utility.collision(this.oven, this.plateArr[this.counter]) &&
            this.plateArr[this.counter].contents.length >= 3 && this.plateArr[this.counter].cooked === false) {  
                if (this.oven.isCooking(e)) {
                    let that = this;
                    let currPlate = this.plateArr[this.counter];
                    currPlate.cooking = true;
                    this.character.pickedStatus = false;
                    currPlate.sprite.x = 0;
                    currPlate.sprite.y = 0;
                    this.counter += 1; 
                    setTimeout(function() {
                        currPlate.cooking = false;
                        currPlate.sprite.x = 300;
                        currPlate.sprite.y = 40;
                        currPlate.cooked = true;
                        that.oven.cookingItems.shift();
                        }, 10000);
                }
        }

        this.utility.cookedDownCol(this.character, this.plateArr, e); 
    }

    keyUpHandler(e) {
        this.character.keyUp(e);
        this.utility.keyUpCol(this.character, this.cheeseArr, this.counter, e);
        this.utility.keyUpCol(this.character, this.tomatoArr, this.counter, e);
        this.utility.keyUpCol(this.character, this.pepperoniArr, this.counter, e);
        this.utility.keyUpCol(this.character, this.breadArr, this.counter, e);
        this.utility.keyUpCol(this.character, this.plateArr, this.counter, e);
        this.utility.cookedUpCol(this.character, this.plateArr, e);
    }
}

export default UnderCooked;