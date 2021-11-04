let up = [getKeyCode("up"),false]
let right = [getKeyCode("right"),false]
let down = [getKeyCode("down"),false]
let left = [getKeyCode("left"),false]
let pause = [getKeyCode("space"),false]

let inputs = [up,right,down,left,pause];

function getKeyCode(key){
    let keys = {
        "left": 37,
        "up": 38,
        "right": 39,
        "down": 40,
        "space": 32
    }
    return keys[key];
}