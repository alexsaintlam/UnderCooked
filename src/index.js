import UnderCooked from "./scripts/game"
import "./styles/background.css"
import background from "./images/background.png";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas1');

    new UnderCooked(canvas);
});

