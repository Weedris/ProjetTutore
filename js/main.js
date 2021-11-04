const canvas = new Canvas(document.getElementById("screen"));
let isfirstTimePlay = true;

initializeAnimationFrames();
initializeSounds();
initializeGameElements();
setInputs(inputs);
setInterval(GameLoop, 1000 / gameFrameRate);

function GameLoop() {
    canvas.clearCanvas();
    background.render();
    hud.displayBackground();
    updateGamestate();
}