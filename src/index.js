import UnderCooked from "./scripts/game"
import "./styles/background.css"
import background from "./images/background.png";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext("2d");

    const backgroundSprite = new Image();
    backgroundSprite.src = background;

    function drawBack() {
        ctx.drawImage(backgroundSprite, 0, 0);
    }

    drawBack();

    new UnderCooked(canvas);
        
});

