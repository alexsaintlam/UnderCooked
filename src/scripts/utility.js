class Utility {
    constructor(){}
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
}

export default Utility;