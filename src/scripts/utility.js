class Utility {
    constructor(){}

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

    plateCollision(char, ing, plate, ingStr, e) {
        if (this.collision(ing, plate)) {
            plate.placedContent(e, ingStr);
            if (plate.placedContent && plate.contents.includes(ingStr)) {
                char.pickedStatus = false;
                ing.sprite.x = 0;
                ing.sprite.y = 0;
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
        } else if (this.collision(char, ingArr[counter + 1]) && ingArr[counter].pickedCount > 0) {
            char.pickedUp(e);
            ingArr[counter + 1].pickedUp(e);
            if (ingArr[counter + 1].pickedStatus === true && char.pickedStatus === true) {
                ingArr[counter + 1].keyDown(e);
                ingArr[counter + 1].pickedCount += 1
            }
        }
    }

    keyUpCol(char, ingArr, counter, e) {
        if (this.collision(char, ingArr[counter])) {
            ingArr[counter].keyUp(e);
        } else if (this.collision(char, ingArr[counter + 1])) {
            ingArr[counter + 1].keyUp(e);
        }
    }

    cookedDownCol(char, plateArr, e) {
        for (let i = 0; i < plateArr.length; i++) {
            let cookedPlate = plateArr[i];
            if (this.collision(char, cookedPlate) && cookedPlate.cooked) {
                char.pickedUp(e);
                cookedPlate.pickedUp(e);
                if (cookedPlate.pickedStatus === true && char.pickedStatus === true) {
                    cookedPlate.keyDown(e);
                }
            }
        }
    }

    cookedUpCol(char, plateArr, e) {
        for (let i = 0; i < plateArr.length; i++) {
            let cookedPlate = plateArr[i];
            if (this.collision(char, cookedPlate) && cookedPlate.cooked) {
                cookedPlate.keyUp(e);
            }
        }
    }
}

export default Utility;