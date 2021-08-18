import UnderCooked from "./scripts/game"
import "./styles/background.css"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas1');

    new UnderCooked(canvas);
});

