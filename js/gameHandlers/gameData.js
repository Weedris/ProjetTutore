// MISCELLANEOUS
const gameFrameRate = 60;

const gameBgmInGameVolume = 0.4;
const gameBgmMenuVolume = 0.15;
const backgroundAnimationFrameRate = 10;

// ENTITY
const spawnDuration = 60;
const spawnAnimationFrameRate = 10;
const hurtBoxColor = "rgba(255,0,0,0.5)";
const hitBoxColor = "rgba(0,255,0,0.5)";

const spawnAreaMultiplicator = {
    min: 0.1,
    maxMinusMin: 0.8
};

const crabSpawnSquidEatenModulo = 10;
const squidSpawnSquidEatenModulo = 15;

// SHARK
const sharkStartPosMultiplicator = {
    x: 15 / 64,
    y: 22 / 64
};

const sharkScale = {
    x: 0.4,
    y: 0.4
};

const sharkCollisionBoxSizeBaseValue = {
    hitBox: {
        jaws: {
            left: {
                x: -240,
                y: 60,
                width: 380,
                height: 160
            },
            right: {
                x: 240,
                y: 60,
                width: 300,
                height: 160
            }
        }
    },
    hurtBox: {
        head: {
            left: {
                x: -240,
                y: -20,
                width: 380,
                height: 200
            },
            right: {
                x: 240,
                y: -20,
                width: 380,
                height: 200
            }
        },
        butt: {
            left: {
                x: 15,
                y: -20,
                width: 380,
                height: 300
            },
            right: {
                x: -15,
                y: -20,
                width: 380,
                height: 300
            }
        },
        tail: {
            left: {
                x: +280,
                y: -130,
                width: 150,
                height: 250
            },
            right: {
                x: -280,
                y: -130,
                width: 150,
                height: 250
            }
        }
    }
}

const sharkInitialSpeed = 5;
const sharkInitialLifePoint = 3;

const sharkEatDuration = 20;
const sharkTakeDamageDuration = 5;
const sharkInvincibleTimeDuration = 60;

const sharkIdleAnimationFrameRate = 4;
const sharkMoveAnimationFrameRate = 4;
const sharkEatAnimationFrameRate = 8;
const sharkHurtAnimationFrameRate = 4;
const sharkDieAnimationFrameRate = 4;

// CRAB
const crabStartPosMultiplicator = {
    x: 50 / 64,
    y: 21 / 64
};

const crabScale = {
    x: 0.15,
    y: 0.15
}

const crabCollisionBoxScale = {
    x: 0.8,
    y: 0.4
};

const crabInitialSpeed = 8;
const crabAttackDuration = 30;
const crabMoveAnimationFrameRate = 4;
const crabAttackAnimationFrameRate = 8;

// SQUID
const squidStartPosMultiplicator = {
    x: 37 / 64,
    y: 24 / 64
};

const squidScale = {
    x: 0.15,
    y: 0.15
};

const squidCollisionBoxScale = {
    x: 0.9,
    y: 0.9
};

const squidGoldenTypeProbability = 0.2;
const squidLifeTypeProbability = 0.1;
const squidScoreGivenByGoldenType = 3;

const squidInitialSpeed = 1;
const squidSpeedMultiplicator = 4;
const squidStartType = 0;

const squidDeathDuration = 30;
const squidDisapearDuration = 120;
const squidMoveAnimationFrameRate = 10;
const squidDieAnimationFrameRate = 10;


// hud
const hudInfoBackGroundScoreScale = 0.5;
const hudInfoBackGroundLifePointScale = 0.5;
const hudLifePointScale = 0.2;
const hudScoreScale = 0.08

const hudScorePosition = {
    x: 20,
    y: 30
};

const menuPositionMultiplicator = {
    x: 0.08,
    y: 0.08,
    width: 0.84,
    height: 0.84
};

const hudMenuFrameRate = 6;

const hudScoreTextPosition = {
    x: 90,
    y: 80
}

const hudScoreFontSize = 25;

const hudLifePointXOffset = 15;
const hudLifePointY = 50;
const hudLifePointXSpaceBetween = 50;

const hudLifePointSpawnDuration = 30;
const hudLifePointPopDuration = 30;
const hudLifePointSpawnFrameRate = 10;
const hudLifePointPopFrameRate = 10;