import Character from "./character";
import Cheese from "./foods/cheese";
import Utility from "./utility";
import Level from "./level";
import Tomato from "./foods/tomato";
import Pepperoni from "./foods/pepperoni";
import Bread from "./foods/bread";
import Plate from "./plate";
import Oven from "./oven";
import Stove from "./stove";
import Pizza from "./pizza";
import Sauce from "./foods/sauce";
import Angry from "./angry";
import Checkout from "./checkout";
import Order from "./order";

class UnderCooked {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.character = new Character(this.dimensions, this.ctx);
        this.oven = new Oven(this.dimensions, this.ctx);
        this.stove = new Stove(this.dimensions, this.ctx);
        this.utility = new Utility();
        this.level = new Level(this.dimensions, this.ctx);
        this.angry = new Angry(this.dimensions, this.ctx);
        this.checkout = new Checkout(this.dimensions, this.ctx);
        this.cheeseArr = [];
        this.tomatoArr = [];
        this.pepperoniArr = [];
        this.breadArr = [];
        this.plateArr = [];
        this.pizzaArr = [];
        this.sauceArr = [];
        this.orderArr = [new Order(this.dimensions, this.ctx)];
        this.cheeseCount = 0;
        this.tomatoCount = 0;
        this.pepperoniCount = 0;
        this.breadCount = 0;
        this.plateCount = 0;
        this.pizzaCount = 0;
        this.sauceCount = 0;
        this.time = 60;
        this.totalScore = 0;

        for (let i = 0; i < 15; i++) {
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
        this.gameStatus = false;
        this.started = [];
        this.initialStart = true;
        this.gameOver = false;
        
        this.resetId = document.getElementById("reset");
        this.instructionsId = document.getElementById("instructions");
        this.greetId = document.getElementById("greet");
        this.greetId.style.visibility = "visible"
        this.instructionsId.hidden = true;
        this.resetId.hidden = true;
        this.startAnimate(13);
        this.registerEvents();   
    }

    //ANIMATION

    startAnimate(fps) {
        this.fpsInterval = 1000 / fps;
        this.then = Date.now();
        this.startTime = this.then;
        this.animate();
    }

    animate() {
        if (this.initialStart && !this.gameStatus) {
            // this.initial.animate();
            requestAnimationFrame(this.animate.bind(this));
        } else if (!this.initialStart && !this.gameStatus) {
            requestAnimationFrame(this.animate.bind(this));
        } else {
            this.resetId.hidden = false;
            this.instructionsId.hidden = false;
            if (this.started.length < 1) {
                this.started.push("started");
                this.score();
                setInterval(this.timer.bind(this), 1000);
                setInterval(this.createOrder.bind(this), 8000);
            }

            requestAnimationFrame(this.animate.bind(this));
            this.now = Date.now();
            this.elapsed = this.now - this.then;

            if (this.elapsed > this.fpsInterval) {
                this.then = this.now - (this.elapsed % this.fpsInterval);
                this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
                document.getElementById("timer").innerText = `Time: ${this.time}`;
                this.level.animate();
                this.stove.animate();
                this.oven.animate();
                this.angry.animate();
                this.character.animate();
                this.checkout.animate();
                this.cheeseArr[this.cheeseCount + 1].animate();
                this.tomatoArr[this.tomatoCount + 1].animate();
                this.pepperoniArr[this.pepperoniCount + 1].animate();
                this.breadArr[this.breadCount + 1].animate();
                this.plateArr[this.plateCount + 1].animate();
                this.utility.visibleAnimate(this.plateArr[this.plateCount]);
                this.utility.visibleAnimate(this.cheeseArr[this.cheeseCount]);
                this.utility.visibleAnimate(this.tomatoArr[this.tomatoCount]);
                this.utility.visibleAnimate(this.pepperoniArr[this.pepperoniCount]);
                this.utility.visibleAnimate(this.breadArr[this.breadCount]);
                this.utility.arrAnimate(this.orderArr);
                this.utility.arrAnimate(this.pizzaArr);
                this.utility.orderColReset(this.orderArr);

                if (this.pizzaArr.length > 0) {
                    this.utility.visibleAnimate(this.pizzaArr[this.pizzaCount]);
                }

                if (this.sauceArr.length > 0) {
                    this.utility.visibleAnimate(this.sauceArr[this.sauceCount]);
                }
            }
        }
    }

    //KEY DETECTION

    registerEvents() {
        window.addEventListener("keydown", this.keyDownHandler.bind(this));
        window.addEventListener("keyup", this.keyUpHandler.bind(this));
        this.resetId.addEventListener("mousedown", this.reset.bind(this));
    }

    keyDownHandler(e) {
        this.start(e);
        this.reset(e);
        this.character.keyDown(e);
        this.angry.keyDown(e);
        this.utility.charIngCollision(this.character, this.cheeseArr, this.cheeseCount, e);
        this.utility.charIngCollision(this.character, this.tomatoArr, this.tomatoCount, e);
        this.utility.charIngCollision(this.character, this.pepperoniArr, this.pepperoniCount, e);
        this.utility.charIngCollision(this.character, this.breadArr, this.breadCount, e);
        
        if (this.pizzaArr.length > 0) {
            this.utility.charIngCollision(this.character, this.pizzaArr, this.pizzaCount, e);
        }

        if (this.sauceArr.length > 0) {
            this.utility.charIngCollision(this.character, this.sauceArr, this.sauceCount, e);
        }

        if (this.sauceArr.length > 0) {
            if (this.utility.collision(this.character, this.plateArr[this.plateCount]) &&
                !this.utility.collision(this.cheeseArr[this.cheeseCount], this.plateArr[this.plateCount]) &&
                !this.utility.collision(this.breadArr[this.breadCount], this.plateArr[this.plateCount]) &&
                !this.utility.collision(this.pepperoniArr[this.pepperoniCount], this.plateArr[this.plateCount]) &&
                !this.utility.collision(this.sauceArr[this.sauceCount], this.plateArr[this.plateCount])) {  
                    this.character.pickedUp(e);
                    this.plateArr[this.plateCount].pickedUp(e);
                    
                    if (this.plateArr[this.plateCount].pickedStatus === true &&
                        this.character.pickedStatus === true) {
                        this.plateArr[this.plateCount].keyDown(e);
                }
            }
        }
        
        if (this.sauceArr.length < 1) {
            if (this.utility.collision(this.character, this.plateArr[this.plateCount]) &&
            !this.utility.collision(this.cheeseArr[this.cheeseCount], this.plateArr[this.plateCount]) &&
            !this.utility.collision(this.breadArr[this.breadCount], this.plateArr[this.plateCount]) &&
            !this.utility.collision(this.pepperoniArr[this.pepperoniCount], this.plateArr[this.plateCount])) {  
                this.character.pickedUp(e);
                this.plateArr[this.plateCount].pickedUp(e);
                    if (this.plateArr[this.plateCount].pickedStatus === true &&
                        this.character.pickedStatus === true) {
                        this.plateArr[this.plateCount].keyDown(e);
                }
            }
        }

        this.utility.plateCollision(this.character, this.cheeseArr, this.cheeseCount, this.plateArr[this.plateCount], "cheese", e);
        this.utility.plateCollision(this.character, this.pepperoniArr, this.pepperoniCount, this.plateArr[this.plateCount], "pepperoni", e);
        this.utility.plateCollision(this.character, this.breadArr, this.breadCount, this.plateArr[this.plateCount], "bread", e)

        if (this.sauceArr.length > 0) {
            this.utility.plateCollision(this.character, this.sauceArr, this.sauceCount, this.plateArr[this.plateCount], "sauce", e);
        }

        if (this.utility.collision(this.oven, this.plateArr[this.plateCount])) {  
            if (this.oven.isCooking(e, this.plateArr[this.plateCount])) {
                let that = this;
                this.character.pickedStatus = false;
                this.plateArr[this.plateCount].sprite.x = 0;
                this.plateArr[this.plateCount].sprite.y = 0;
                this.plateArr[this.plateCount].visible = false;
                this.plateCount += 1; 
                this.cheeseCount += 1;
                this.breadCount += 1;
                this.pepperoniCount += 1;
                setTimeout(function() {
                    that.pizzaArr.push(new Pizza(that.dimensions, that.ctx, that.oven.cookingItems[0]));
                    that.oven.cookingItems.shift();}, 7000);
            } else if ((this.utility.collision(this.oven, this.plateArr[this.plateCount]) &&
                    !this.plateArr[this.plateCount].contents.includes("cheese") && 
                    e.keyCode === 32) ||
                    (this.utility.collision(this.oven, this.plateArr[this.plateCount]) && 
                    !this.plateArr[this.plateCount].contents.includes("sauce") && 
                    e.keyCode === 32) ||
                    (this.utility.collision(this.oven, this.plateArr[this.plateCount]) &&
                    !this.plateArr[this.plateCount].contents.includes("bread") && 
                    e.keyCode === 32)) {
                this.angry.youMad();
            }
        }
        
        if (this.utility.collision(this.stove, this.tomatoArr[this.tomatoCount])) {
            if (this.stove.isCooking(e)) {
                let that = this;
                this.character.pickedStatus = false;
                this.tomatoArr[this.tomatoCount].sprite.x = 0;
                this.tomatoArr[this.tomatoCount].sprite.y = 0;
                this.tomatoArr[this.tomatoCount].visible = false;
                this.tomatoCount += 1;
                setTimeout(function() {
                    that.sauceArr.push(new Sauce(that.dimensions, that.ctx));
                    that.sauceArr[that.sauceArr.length -1].visible = true;
                    that.stove.cookingItems.shift();
                    }, 5000);
            } else if (!this.stove.isCooking(e) && e.keyCode === 32) {
                this.angry.youMad();
            }
        }

        if (this.pizzaArr.length > 0) {
            if (this.utility.collision(this.pizzaArr[this.pizzaCount], this.checkout) &&
                e.keyCode === 32) {
                if (this.utility.getPaid(this.orderArr, this.pizzaArr, this.pizzaCount, this)) {
                    this.checkout.scoreArr.push(10);
                    this.score();
                    this.character.pickedStatus = false;
                } else {
                    this.pizzaArr.shift();
                    this.character.pickedStatus = false;
                }
            }
        }
    }

    keyUpHandler(e) {
        this.character.keyUp(e);
        this.angry.keyUp(e);
        this.utility.keyUpCol(this.character, this.cheeseArr, this.cheeseCount, e);
        this.utility.keyUpCol(this.character, this.tomatoArr, this.tomatoCount, e);
        this.utility.keyUpCol(this.character, this.pepperoniArr, this.pepperoniCount, e);
        this.utility.keyUpCol(this.character, this.breadArr, this.breadCount, e);
        this.utility.keyUpCol(this.character, this.plateArr, this.plateCount, e);

        if (this.pizzaArr.length > 0) {
            this.utility.keyUpCol(this.character, this.pizzaArr, this.pizzaCount, e);
        }

        if (this.sauceArr.length > 0) {
            this.utility.keyUpCol(this.character, this.sauceArr, this.sauceCount, e);
        }
    }

    //LEVEL FUNCTIONS

    score() {
        const sum = this.checkout.scoreArr.reduce((acc, ele) => 
            {return acc + ele}, 0);

        const scoreId = document.getElementById("score");
        scoreId.innerText = `Score: ${sum}`;
        this.totalScore = sum;
    }

    timer() {
        if (this.time > 0) {
            this.time -= 1;
        } else if (this.time < 1) {
            this.gameOverMsg();
            this.gameStatus = false; 
        }
    }

    createOrder() {
        if (this.orderArr.length < 5) {
            this.orderArr.push(new Order(this.dimensions, this.ctx));
        }
    }

    //START AND REESET FUNCTIONS

    start(e) {
        if (e.keyCode === 13 && this.gameStatus === false) {
            this.gameStatus = true;
            this.initialStart = false;
            this.greetId.style.visibility = "hidden"
        }
    }

    reset(e) {
        if(e.type === "mousedown") {
            this.cheeseArr = [];
            this.tomatoArr = [];
            this.pepperoniArr = [];
            this.breadArr = [];
            this.plateArr = [];
            this.pizzaArr = [];
            this.sauceArr = [];
            this.orderArr = [new Order(this.dimensions, this.ctx)];
            this.cheeseCount = 0;
            this.tomatoCount = 0;
            this.pepperoniCount = 0;
            this.breadCount = 0;
            this.plateCount = 0;
            this.pizzaCount = 0;
            this.sauceCount = 0;
            this.time = 60;
    
            for (let i = 0; i < 15; i++) {
                this.cheeseArr.push(new Cheese(this.dimensions, this.ctx)); 
                this.tomatoArr.push(new Tomato(this.dimensions, this.ctx));
                this.pepperoniArr.push(new Pepperoni(this.dimensions, this.ctx));
                this.breadArr.push(new Bread(this.dimensions, this.ctx));
                this.plateArr.push(new Plate(this.dimensions, this.ctx))
            }

            this.gameStatus = true;
        }
    }

    gameOverMsg() {
            this.ctx.fillStyle = 'rgb(128, 56, 128)';
            this.ctx.fillRect(25, 27, 125, 40)
            this.ctx.fillStyle = 'white'
            this.ctx.fillText("Time Is Up!", 60, 40);
            this.ctx.fillText(`You Scored ${this.totalScore} Points`, 42, 50);
            this.ctx.fillText("Press Reset to Play Again", 30, 60);
        
    }
}

export default UnderCooked;