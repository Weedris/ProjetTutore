/*************
 *  SPRITES  *
 ************/

const sharkLeftSprite = document.getElementById("sharkLeftSprite");
const sharkRightSprite = document.getElementById("sharkLeftSprite");
const crabSprite = document.getElementById("crabSprite");
const baseSquidSprite = document.getElementById("baseSquidSprite");
const goldenSquidSprite = document.getElementById("goldenSquidSprite");
const lifeSquidSprite = document.getElementById("lifeSquidSprite");
const hudBackGroundScoreSprite = document.getElementById("hudBackGroundScoreSprite");
const hudBackGroundLifePointSprite = document.getElementById("hudBackGroundLifePointSprite");
const hudScoreSprite = document.getElementById("hudScoreSprite");
const hudLifePointSprite = document.getElementById("hudLifePointSprite");

/**********************
 *  ANIMATION FRAMES  *
 *********************/

// SHARK ANIMATION FRAMES
// shark idle
const sharkIdleLeft1 = document.getElementById("sharkIdleLeft1");
const sharkIdleLeft2 = document.getElementById("sharkIdleLeft2");
const sharkIdleRight1 = document.getElementById("sharkIdleRight1");
const sharkIdleRight2 = document.getElementById("sharkIdleRight2");

let sharkIdleLeftFrames = [];
let sharkIdleRightFrames = [];

// shark move
const sharkMoveLeft1 = document.getElementById("sharkMoveLeft1");
const sharkMoveLeft2 = document.getElementById("sharkMoveLeft2");
const sharkMoveLeft3 = document.getElementById("sharkMoveLeft3");
const sharkMoveRight1 = document.getElementById("sharkMoveRight1");
const sharkMoveRight2 = document.getElementById("sharkMoveRight2");
const sharkMoveRight3 = document.getElementById("sharkMoveRight3");

let sharkMoveLeftFrames = [];
let sharkMoveRightFrames = [];

// shark eat
const sharkEatLeft1 = document.getElementById("sharkEatLeft1");
const sharkEatLeft2 = document.getElementById("sharkEatLeft2");
const sharkEatLeft3 = document.getElementById("sharkEatLeft3");
const sharkEatLeft4 = document.getElementById("sharkEatLeft2");
const sharkEatRight1 = document.getElementById("sharkEatRight1");
const sharkEatRight2 = document.getElementById("sharkEatRight2");
const sharkEatRight3 = document.getElementById("sharkEatRight3");
const sharkEatRight4 = document.getElementById("sharkEatRight2");

let sharkEatLeftFrames = [];
let sharkEatRightFrames = [];

// shark hurt
const sharkHurtLeft1 = document.getElementById("sharkHurtLeft1");
const sharkHurtLeft2 = document.getElementById("sharkHurtLeft2");
const sharkHurtRight1 = document.getElementById("sharkHurtRight1");
const sharkHurtRight2 = document.getElementById("sharkHurtRight2");

let sharkHurtLeftFrames = [];
let sharkHurtRightFrames = [];

const sharkHurtRedLeft1 = document.getElementById("sharkHurtRedLeft1");
const sharkHurRedtLeft2 = document.getElementById("sharkHurtRedLeft2");
const sharkHurtRedRight1 = document.getElementById("sharkHurtRedRight1");
const sharkHurtRedRight2 = document.getElementById("sharkHurtRedRight2");

let sharkHurtRedLeftFrames = [];
let sharkHurtRedRightFrames = [];

// shark die
const sharkDieLeft1 = document.getElementById("sharkDieLeft1");
const sharkDieLeft2 = document.getElementById("sharkDieLeft2");
const sharkDieLeft3 = document.getElementById("sharkDieLeft3");
const sharkDieRight1 = document.getElementById("sharkDieRight1");
const sharkDieRight2 = document.getElementById("sharkDieRight2");
const sharkDieRight3 = document.getElementById("sharkDieRight3");

let sharkDieLeftFrames = [];
let sharkDieRightFrames = [];

// CRAB ANIMATION FRAMES
// crab move
const crabMove1 = document.getElementById("crabMove1");
const crabMove2 = document.getElementById("crabMove2");
const crabMove3 = document.getElementById("crabMove3");

let crabMoveFrames = [];

// crab attack
const crabAttack1 = document.getElementById("crabAttack1");
const crabAttack2 = document.getElementById("crabAttack2");

let crabAttackFrames = [];

// BASE SQUID ANIMATION FRAMES
// base squid move
const baseSquidMove1 = document.getElementById("baseSquidMove1");
const baseSquidMove2 = document.getElementById("baseSquidMove2");
const baseSquidMove3 = document.getElementById("baseSquidMove3");
const baseSquidMove4 = document.getElementById("baseSquidMove4");

let baseSquidMoveFrames = [];

// base squid die
const baseSquidDie1 = document.getElementById("baseSquidDie1");
const baseSquidDie2 = document.getElementById("baseSquidDie2");

let baseSquidDieFrames = [];

// GOLDEN SQUID ANIMATION FRAMES
// golden squid move
const goldenSquidMove1 = document.getElementById("goldenSquidMove1");
const goldenSquidMove2 = document.getElementById("goldenSquidMove2");
const goldenSquidMove3 = document.getElementById("goldenSquidMove3");
const goldenSquidMove4 = document.getElementById("goldenSquidMove4");

let goldenSquidMoveFrames = [];

// golden squid die
const goldenSquidDie1 = document.getElementById("goldenSquidDie1");
const goldenSquidDie2 = document.getElementById("goldenSquidDie2");

let goldenSquidDieFrames = [];

// LIFE SQUID ANIMATION FRAMES
// life squid move
const lifeSquidMove1 = document.getElementById("lifeSquidMove1");
const lifeSquidMove2 = document.getElementById("lifeSquidMove2");
const lifeSquidMove3 = document.getElementById("lifeSquidMove3");
const lifeSquidMove4 = document.getElementById("lifeSquidMove4");

let lifeSquidMoveFrames = [];

// life squid die
const lifeSquidDie1 = document.getElementById("lifeSquidDie1");
const lifeSquidDie2 = document.getElementById("lifeSquidDie2");

let lifeSquidDieFrames = [];

// HUD ANIMATION FRAMES
// start menu
const startMenu1 = document.getElementById("startMenu1");
const startMenu2 = document.getElementById("startMenu2");

let startMenuFrames = [];

// pause menu
const pauseMenu1 = document.getElementById("pauseMenu1");
const pauseMenu2 = document.getElementById("pauseMenu2");

let pauseMenuFrames = [];

// game over menu
const gameOverMenu1 = document.getElementById("gameOverMenu1");
const gameOverMenu2 = document.getElementById("gameOverMenu2");

let gameOverMenuFrames = [];

// life points
const hudLifePointSpawn1 = document.getElementById("hudLifePointSpawn1");
const hudLifePointSpawn2 = document.getElementById("hudLifePointSpawn2");
const hudLifePointSpawn3 = document.getElementById("hudLifePointSpawn3");

let hudLifePointSpawnFrames = [];

const hudLifePointPop1 = document.getElementById("hudLifePointPop1");
const hudLifePointPop2 = document.getElementById("hudLifePointPop2");
const hudLifePointPop3 = document.getElementById("hudLifePointPop3");

let hudLifePointPopFrames = [];

// VISUAL EFFECTS
// spawn
const spawn1 = document.getElementById("spawn1");
const spawn2 = document.getElementById("spawn2");
const spawn3 = document.getElementById("spawn3");

let spawnFrames = [];

// BACKGROUND ANIMATION FRAMES
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg3 = document.getElementById("bg3");
const bg4 = document.getElementById("bg4");
const bg5 = document.getElementById("bg5");
const bg6 = document.getElementById("bg6");
const bg7 = document.getElementById("bg7");
const bg8 = document.getElementById("bg8");
const bg9 = document.getElementById("bg9");
const bg10 = document.getElementById("bg10");
const bg11 = document.getElementById("bg11");
const bg12 = document.getElementById("bg12");
const bg13 = document.getElementById("bg13");
const bg14 = document.getElementById("bg14");
const bg15 = document.getElementById("bg15");
const bg16 = document.getElementById("bg16");
const bg17 = document.getElementById("bg17");
const bg18 = document.getElementById("bg18");
const bg19 = document.getElementById("bg19");
const bg20 = document.getElementById("bg20");
const bg21 = document.getElementById("bg21");
const bg22 = document.getElementById("bg22");
const bg23 = document.getElementById("bg23");
const bg24 = document.getElementById("bg24");
const bg25 = document.getElementById("bg25");

let backgroundFrames = [];


function initializeAnimationFrames() {
    // SHARK ANIMATION FRAMES
    // shark idle
    sharkIdleLeftFrames = [];
    sharkIdleLeftFrames.push(sharkIdleLeft1);
    sharkIdleLeftFrames.push(sharkIdleLeft2);

    sharkIdleRightFrames = [];
    sharkIdleRightFrames.push(sharkIdleRight1);
    sharkIdleRightFrames.push(sharkIdleRight2);

    // shark move
    sharkMoveLeftFrames = [];
    sharkIdleLeftFrames.push(sharkIdleLeft1);
    sharkMoveLeftFrames.push(sharkMoveLeft1);
    sharkMoveLeftFrames.push(sharkMoveLeft2);
    sharkMoveLeftFrames.push(sharkMoveLeft1);

    sharkMoveRightFrames = [];
    sharkIdleRightFrames.push(sharkIdleRight1);
    sharkMoveRightFrames.push(sharkMoveRight1);
    sharkMoveRightFrames.push(sharkMoveRight2);
    sharkMoveRightFrames.push(sharkMoveRight1);

    // shark eat
    sharkEatLeftFrames = [];
    sharkEatLeftFrames.push(sharkEatLeft1);
    sharkEatLeftFrames.push(sharkEatLeft2);
    sharkEatLeftFrames.push(sharkEatLeft1);

    sharkEatRightFrames = [];
    sharkEatRightFrames.push(sharkEatRight1);
    sharkEatRightFrames.push(sharkEatRight2);
    sharkEatRightFrames.push(sharkEatRight1);

    // shark hurt
    sharkHurtLeftFrames = [];
    sharkHurtLeftFrames.push(sharkHurtLeft1);
    sharkHurtLeftFrames.push(sharkHurtLeft2);

    sharkHurtRightFrames = [];
    sharkHurtRightFrames.push(sharkHurtRight1);
    sharkHurtRightFrames.push(sharkHurtRight2);

    sharkHurtRedLeftFrames = [];
    sharkHurtRedLeftFrames.push(sharkHurtRedLeft1);
    sharkHurtRedLeftFrames.push(sharkHurtRedLeft2);

    sharkHurtRedRightFrames = [];
    sharkHurtRedRightFrames.push(sharkHurtRedRight1);
    sharkHurtRedRightFrames.push(sharkHurtRedRight2);

    // shark die
    sharkDieLeftFrames = [];
    sharkDieLeftFrames.push(sharkDieLeft1);
    sharkDieLeftFrames.push(sharkDieLeft2);

    sharkDieRightFrames = [];
    sharkDieRightFrames.push(sharkDieRight1);
    sharkDieRightFrames.push(sharkDieRight2);

    // CRAB ANIMATION FRAMES
    // crab move
    crabMoveFrames = [];
    crabMoveFrames.push(crabMove1);
    crabMoveFrames.push(crabMove2);
    crabMoveFrames.push(crabMove3);
    crabMoveFrames.push(crabMove2);

    // crab attack
    crabAttackFrames = [];
    crabAttackFrames.push(crabAttack1);
    crabAttackFrames.push(crabAttack2);

    // BASE SQUID ANIMATION FRAMES
    // base squid move
    baseSquidMoveFrames = [];
    baseSquidMoveFrames.push(baseSquidMove1);
    baseSquidMoveFrames.push(baseSquidMove2);
    baseSquidMoveFrames.push(baseSquidMove3);
    baseSquidMoveFrames.push(baseSquidMove4);
    baseSquidMoveFrames.push(baseSquidMove3);
    baseSquidMoveFrames.push(baseSquidMove2);

    // base squid die
    baseSquidDieFrames = [];
    baseSquidDieFrames.push(baseSquidDie1);
    baseSquidDieFrames.push(baseSquidDie2);

    // GOLDEN SQUID ANIMATION FRAMES
    // golden squid move
    goldenSquidMoveFrames = [];
    goldenSquidMoveFrames.push(goldenSquidMove1);
    goldenSquidMoveFrames.push(goldenSquidMove2);
    goldenSquidMoveFrames.push(goldenSquidMove3);
    goldenSquidMoveFrames.push(goldenSquidMove4);
    goldenSquidMoveFrames.push(goldenSquidMove3);
    goldenSquidMoveFrames.push(goldenSquidMove2);

    // golden squid die
    goldenSquidDieFrames = [];
    goldenSquidDieFrames.push(goldenSquidDie1);
    goldenSquidDieFrames.push(goldenSquidDie2);

    // LIFE SQUID ANIMATION FRAMES
    // life squid move
    lifeSquidMoveFrames = [];
    lifeSquidMoveFrames.push(lifeSquidMove1);
    lifeSquidMoveFrames.push(lifeSquidMove2);
    lifeSquidMoveFrames.push(lifeSquidMove3);
    lifeSquidMoveFrames.push(lifeSquidMove4);
    lifeSquidMoveFrames.push(lifeSquidMove3);
    lifeSquidMoveFrames.push(lifeSquidMove2);

    // life squid die
    lifeSquidDieFrames = [];
    lifeSquidDieFrames.push(lifeSquidDie1);
    lifeSquidDieFrames.push(lifeSquidDie2);

    // HUD ANIMATION FRAMES
    // start menu
    startMenuFrames = [];
    startMenuFrames.push(startMenu1);
    startMenuFrames.push(startMenu2);

    // pause menu
    pauseMenuFrames = [];
    pauseMenuFrames.push(pauseMenu1);
    pauseMenuFrames.push(pauseMenu2);

    // game over menu
    gameOverMenuFrames = [];
    gameOverMenuFrames.push(gameOverMenu1);
    gameOverMenuFrames.push(gameOverMenu2);

    // life points
    hudLifePointSpawnFrames = [];
    hudLifePointSpawnFrames.push(hudLifePointSpawn1);
    hudLifePointSpawnFrames.push(hudLifePointSpawn2);
    hudLifePointSpawnFrames.push(hudLifePointSpawn3);

    hudLifePointPopFrames = [];
    hudLifePointPopFrames.push(hudLifePointPop1);
    hudLifePointPopFrames.push(hudLifePointPop2);
    hudLifePointPopFrames.push(hudLifePointPop3);

    // VISUAL EFFECTS
    // spawn
    spawnFrames = [];
    spawnFrames.push(spawn1);
    spawnFrames.push(spawn2);
    spawnFrames.push(spawn3);
    spawnFrames.push(spawn2);

    // BACKGROUND ANIMATION FRAMES
    backgroundFrames = [];
    backgroundFrames.push(bg1);
    backgroundFrames.push(bg2);
    backgroundFrames.push(bg3);
    backgroundFrames.push(bg4);
    backgroundFrames.push(bg5);
    backgroundFrames.push(bg6);
    backgroundFrames.push(bg7);
    backgroundFrames.push(bg8);
    backgroundFrames.push(bg9);
    backgroundFrames.push(bg10);
    backgroundFrames.push(bg11);
    backgroundFrames.push(bg12);
    backgroundFrames.push(bg13);
    backgroundFrames.push(bg14);
    backgroundFrames.push(bg15);
    backgroundFrames.push(bg16);
    backgroundFrames.push(bg17);
    backgroundFrames.push(bg18);
    backgroundFrames.push(bg19);
    backgroundFrames.push(bg20);
    backgroundFrames.push(bg21);
    backgroundFrames.push(bg22);
    backgroundFrames.push(bg23);
    backgroundFrames.push(bg24);
    backgroundFrames.push(bg25);
}

/***********
 *  SOUNDS *
 **********/

// BACKGROUND MUSIC
let gameBgm = new Audio("assets/sounds/bgm/backgroundMusic.mp3");

// SOUND EFFECTS
// shark sfx
let sfxSharkEat = new Audio("assets/sounds/sfx/shark/sharkEat.mp3");
let sfxSharkGainLifePoint = new Audio("assets/sounds/sfx/shark/sharkGainLifePoint.mp3");
let sfxSharkHurt = new Audio("assets/sounds/sfx/shark/sharkHurt.mp3");
let sfxSharkDie = new Audio("assets/sounds/sfx/shark/sharkDie.mp3");

// crab sfx
let sfxCrabSpawn = new Audio("assets/sounds/sfx/crab/crabSpawn.mp3");
let sfxCrabAttack = new Audio("assets/sounds/sfx/crab/crabAttack.mp3");

// squid sfx
let sfxSquidSpawn = new Audio("assets/sounds/sfx/squid/squidSpawn.mp3");
let sfxSquidDie = new Audio("assets/sounds/sfx/squid/squidDie.mp3");
let sfxGoldenSquidDieEffect = new Audio("assets/sounds/sfx/squid/goldenSquidDieEffect.mp3");

function initializeSounds() {
    gameBgm.loop = true;
    gameBgm.volume = gameBgmInGameVolume;
}

/*******************
 *  GAME ELEMENTS  *
 ******************/

let isGamePaused;
let isButtonMenuPressedOnce;
let isGameOver;
let background;
let hud;

let entities;
let shark;
let crab;
let squid;

function initializeGameElements() {
    entities = []
    shark = new Shark(canvas.width * sharkStartPosMultiplicator.x, canvas.height * sharkStartPosMultiplicator.y, sharkScale.x, sharkScale.y, sharkInitialSpeed, sharkInitialLifePoint, sharkRightSprite);
    crab = new Crab(canvas.width * crabStartPosMultiplicator.x, canvas.height * crabStartPosMultiplicator.y, crabScale.x, crabScale.y, crabInitialSpeed, crabSprite);
    squid = new Squid(canvas.width * squidStartPosMultiplicator.x, canvas.height * squidStartPosMultiplicator.y, squidScale.x, squidScale.y, squidInitialSpeed, squidStartType, baseSquidSprite);

    entities.push(shark);
    entities.push(crab);
    entities.push(squid);

    for (let entity of entities) {
        entity.initialize();
    }

    hud = new Hud({
            infoBackGroundScore: {
                reference: hudBackGroundScoreSprite,
                scale: hudInfoBackGroundScoreScale
            },
            infoBackGroundLifePoint: {
                reference: hudBackGroundLifePointSprite,
                scale: hudInfoBackGroundLifePointScale
            },
            lifePoint: {
                reference: hudLifePointSprite,
                scale: hudLifePointScale
            },
            score: {
                reference: hudScoreSprite,
                scale: hudScoreScale
            }
        },
        shark.lifePoint);

    hud.data.score = 0;
    hud.data.squidEaten = 0;
    hud.data.lifePoint = sharkInitialLifePoint;

    background = new Background(gameBgm);

    isButtonMenuPressedOnce = true;
    isGamePaused = false;
    isGameOver = false;
}