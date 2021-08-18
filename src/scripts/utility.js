class Utility {
    constructor(){}

    visibleAnimate(obj) {
        if (obj.visible === true) {
            obj.animate();
        }
    }

    plateAnimate(plate, ing, str) {
        if (!plate.contents.includes(str)) {
            ing.animate();
        }
    }

    collision(obj1, obj2) {
        if (obj1.sprite.x > obj2.sprite.x + obj2.sprite.width ||
            obj1.sprite.x + obj1.sprite.width < obj2.sprite.x ||
            obj1.sprite.y > obj2.sprite.y + obj2.sprite.height ||
            obj1.sprite.y + obj1.sprite.height < obj2.sprite.y) {
                return false;
        } else {
            return true;
        }
    }

    plateCollision(char, ing, ingCount, plate, ingStr, e) {
        if (this.collision(ing[ingCount], plate)) {
            plate.placedContent(e, ingStr);
            if (plate.placedContent && plate.contents.includes(ingStr)) {
                char.pickedStatus = false;
                ing[ingCount].visible = false;
                ing[ingCount].sprite.x = 0;
                ing[ingCount].sprite.y = 0;
                ing.shift();
            }
        }
    }

    charIngCollision(char, ingArr, counter, e) {
        if (this.collision(char, ingArr[counter])) {
            char.pickedUp(e);
            ingArr[counter].pickedUp(e);
            if (ingArr[counter].pickedStatus === true && char.pickedStatus === true) {
                ingArr[counter].keyDown(e);
                ingArr[counter].pickedCount += 1
            }
        } else if (ingArr[counter + 1]) {
            if (this.collision(char, ingArr[counter + 1]) && ingArr[counter].pickedCount > 0) {
                char.pickedUp(e);
                ingArr[counter + 1].pickedUp(e);
                if (ingArr[counter + 1].pickedStatus === true && char.pickedStatus === true) {
                    ingArr[counter + 1].keyDown(e);
                    ingArr[counter + 1].pickedCount += 1
                }
            }
        }
    }

    orderCol(order1, order2) {

        if (this.collision(order1, order2)) {
            order2.blocked = true;
        }
    }

    orderColReset(orderArr) {
        if (orderArr[0].sprite.x > 1) {
            for (let i = 0; i < orderArr.length; i++) {
                let order = orderArr[i];
                order.blocked = false;
            }
        }
    }

    keyUpCol(char, ingArr, counter, e) {
        if (this.collision(char, ingArr[counter])) {
            ingArr[counter].keyUp(e);
        } else if (ingArr[counter + 1]) {
            if (this.collision(char, ingArr[counter + 1])) {
                ingArr[counter + 1].keyUp(e);
            }
        }
    }

    orderCheck(pizza, orderArr) {
        for (let i = 0; i < orderArr.length; i++) {
            let order = orderArr[i];
            if (pizza.type === order.type) {
                orderArr.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    arrAnimate(orderArr) {
        if (orderArr.length > 0) {
            orderArr[0].animate();
        }

        for (let i = 1; i < orderArr.length; i++) {
            orderArr[i].animate();
            orderArr[i].blocked = false;

            if (orderArr.length > 1) {
                this.orderCol(orderArr[i - 1], orderArr[i]);
            }
        }
    }

    getPaid(orderArr, pizzaArr, count) {
        for (let i = 0; i < orderArr.length; i++) {
            let order = orderArr[i];
            if (order.type === pizzaArr[count].type) {
                orderArr.splice(i, 1);
                pizzaArr.shift();
                return true;
            }
        }

        return false;
    }


}

export default Utility;