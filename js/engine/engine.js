/***********/
/* Vector */
/***********/

class Vector {
    constructor(dx, dy) {
        this.x = dx;
        this.y = dy;
    }
}

/************/
/* Movement */
/************/

function move(entity, vector, speed) {
    entity.x = entity.x + (speed * vector.x);
    entity.y = entity.y + (speed * vector.y);
}

function teleport(entity, x, y) {
    entity.x = x;
    entity.y = y;
}

/*************/
/* Collision */
/*************/

function collisionBetweenRectangle(hitBoxA, hitBoxB) {
    return (((hitBoxA.x - (hitBoxA.width / 2) < hitBoxB.x + (hitBoxB.width / 2)) && (hitBoxA.x + (hitBoxA.width / 2) > hitBoxB.x - (hitBoxB.width / 2))) && ((hitBoxA.y - (hitBoxA.height / 2) < hitBoxB.y + (hitBoxB.height / 2)) && (hitBoxA.y + (hitBoxA.height / 2) > hitBoxB.y - (hitBoxB.height / 2))));
}
    /************/
    /* Controls */
    /************/

    document.addEventListener('keydown', press);
    document.addEventListener('keyup', release);
    //document.addEventListener('click', mouseClick);

    let allInputs = [];
    let playerInputs = [];

    // Keyboard inputs
    function setInputs(gameInputs) {
        playerInputs = gameInputs;
    }

    function press(e) {
        playerInputs.forEach(function (playerInput) {
            if (playerInput[0] == e.keyCode) {
                playerInput[1] = true;
            }
        })
        allInputs.push(e.keyCode);
    }

    function release(e) {
        playerInputs.forEach(function (playerInput) {
            if (playerInput[0] == e.keyCode) {
                playerInput[1] = false;
            }
        })
        let inputToRemove = allInputs.indexOf(e.keyCode);
        allInputs.splice(inputToRemove, 1);
    }

    /**********/
    /* Sound */
    /**********/
    async function playBgm(sound, volume) {
        try {
            sound.volume = volume;
            await sound.play();
        } catch (err) {}
    }

    /**********/
    /* Canvas */
    /**********/

    class Canvas {
        constructor(gameCanvas) {
            this.boundingClientRect = gameCanvas.getBoundingClientRect()
            this.ctx = gameCanvas.getContext("2d");
            this.width = gameCanvas.width;
            this.height = gameCanvas.height;
        }

        clearCanvas() {
            this.ctx.clearRect(0, 0, this.width, this.height);
        }

        drawRect(color, x, y, dx, dy) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(x, y, dx, dy);
        }

        drawImage(source, x, y, w, h) {
            this.ctx.drawImage(source, x, y, w, h);
        }

        writeText(color, font, fontSize, text, x, y) {
            this.ctx.fillStyle = color;
            this.ctx.font = fontSize + "px "+font;
            this.ctx.fillText(text, x, y);
        }
    }