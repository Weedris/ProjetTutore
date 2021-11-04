class Hud {
    constructor(hudElement, lifePoint) {
        this.hudElement = {
            infoBackGroundScore: {
                reference: hudElement.infoBackGroundScore.reference,
                x: 0,
                y: 0,
                scale: hudElement.infoBackGroundScore.scale
            },
            infoBackGroundLifePoint: {
                reference: hudElement.infoBackGroundLifePoint.reference,
                x: (canvas.width - (hudElement.infoBackGroundLifePoint.reference.width * hudElement.infoBackGroundLifePoint.scale)),
                y: 0,
                scale: hudElement.infoBackGroundLifePoint.scale
            },
            lifePoint: {
                reference: hudElement.lifePoint.reference,
                x: (canvas.width - (hudElement.infoBackGroundLifePoint.reference.width * hudElement.infoBackGroundLifePoint.scale)) + hudLifePointXOffset,
                y: hudLifePointY,
                scale: hudElement.lifePoint.scale
            },
            score: {
                reference: hudElement.score.reference,
                x: hudScorePosition.x,
                y: hudScorePosition.y,
                scale: hudElement.score.scale
            },
        };
        this.data = {
            score: 0,
            squidEaten: 0,
            lifePoint: lifePoint
        }

        this.isLifePointIncreasing = false;
        this.heartSpawnFrame = hudLifePointSpawnDuration;
        this.heartSpawnTimerCount = 0;
        this.isLifePointDecreasing = false;
        this.heartPopFrame = hudLifePointPopDuration;
        this.heartPopTimerCount = 0;

        this.animations = {
            startMenu: new Animation(startMenuFrames, hudMenuFrameRate, true, false),
            pauseMenu: new Animation(pauseMenuFrames, hudMenuFrameRate, true, false),
            gameOverMenu: new Animation(gameOverMenuFrames, hudMenuFrameRate, true, false),
            lifePoint: {
                spawn: new Animation(hudLifePointSpawnFrames, hudLifePointSpawnFrameRate, false, false),
                pop: new Animation(hudLifePointPopFrames, hudLifePointPopFrameRate, false, false)
            },
        }
    }

    displayElements() {
        this.updateTimer();
        this.renderElements();
    }

    updateTimer() {
        if (this.isLifePointIncreasing) {
            if (this.heartSpawnTimerCount < this.heartSpawnFrame) {
                this.heartSpawnTimerCount++;
            } else {
                this.heartSpawnTimerCount = 0;
                this.data.lifePoint++;
                this.animations.lifePoint.spawn.reset();
                this.isLifePointIncreasing = false;
            }
        }
        if (this.isLifePointDecreasing) {
            if (this.heartPopTimerCount < this.heartPopFrame) {
                this.heartPopTimerCount++;
            } else {
                this.heartPopTimerCount = 0;
                this.data.lifePoint--;
                this.animations.lifePoint.pop.reset();
                this.isLifePointDecreasing = false;
            }
        }
    }

    displayMenu(menu) {
        canvas.drawRect("rgba(0,0,0,0.3)", 0, 0, canvas.width, canvas.height);

        switch (menu) {
            case "start":
                this.animations.startMenu.update();
                this.animations.startMenu.render(canvas.width * menuPositionMultiplicator.x, canvas.height * menuPositionMultiplicator.y, canvas.width * menuPositionMultiplicator.width, canvas.height * menuPositionMultiplicator.height);
                break;
            case "pause":
                this.animations.pauseMenu.update();
                this.animations.pauseMenu.render(canvas.width * menuPositionMultiplicator.x, canvas.height * menuPositionMultiplicator.y, canvas.width * menuPositionMultiplicator.width, canvas.height * menuPositionMultiplicator.height);
                break;
            case "gameOver":
                this.animations.gameOverMenu.update();
                this.animations.gameOverMenu.render(canvas.width * menuPositionMultiplicator.x, 0, canvas.width * menuPositionMultiplicator.width, canvas.height * menuPositionMultiplicator.height);
                break;
            default:
        }
    }

    renderElements() {
        switch (this.data.lifePoint) {
            case 3:
                if (this.isLifePointDecreasing) {
                    this.animations.lifePoint.pop.update();
                    this.animations.lifePoint.pop.render(this.hudElement.lifePoint.x + hudLifePointXSpaceBetween*2, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                } else {
                    canvas.drawImage(this.hudElement.lifePoint.reference, this.hudElement.lifePoint.x + hudLifePointXSpaceBetween*2, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                }

                canvas.drawImage(this.hudElement.lifePoint.reference, this.hudElement.lifePoint.x + hudLifePointXSpaceBetween, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                canvas.drawImage(this.hudElement.lifePoint.reference, this.hudElement.lifePoint.x, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                break;
            case 2:
                if (this.isLifePointIncreasing) {
                    this.animations.lifePoint.spawn.update();
                    this.animations.lifePoint.spawn.render(this.hudElement.lifePoint.x + hudLifePointXSpaceBetween*2, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                    canvas.drawImage(this.hudElement.lifePoint.reference, this.hudElement.lifePoint.x + hudLifePointXSpaceBetween, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                } else if (this.isLifePointDecreasing) {
                    this.animations.lifePoint.pop.update();
                    this.animations.lifePoint.pop.render(this.hudElement.lifePoint.x + hudLifePointXSpaceBetween, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                } else {
                    canvas.drawImage(this.hudElement.lifePoint.reference, this.hudElement.lifePoint.x + hudLifePointXSpaceBetween, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                }

                canvas.drawImage(this.hudElement.lifePoint.reference, this.hudElement.lifePoint.x, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                break;
            case 1:
                if (this.isLifePointIncreasing) {
                    this.animations.lifePoint.spawn.update();
                    this.animations.lifePoint.spawn.render(this.hudElement.lifePoint.x + hudLifePointXSpaceBetween, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                    canvas.drawImage(this.hudElement.lifePoint.reference, this.hudElement.lifePoint.x, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                } else if (this.isLifePointDecreasing) {
                    this.animations.lifePoint.pop.update();
                    this.animations.lifePoint.pop.render(this.hudElement.lifePoint.x, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                } else {
                    canvas.drawImage(this.hudElement.lifePoint.reference, this.hudElement.lifePoint.x, this.hudElement.lifePoint.y, this.hudElement.lifePoint.reference.width * this.hudElement.lifePoint.scale, this.hudElement.lifePoint.reference.height * this.hudElement.lifePoint.scale);
                }
                break;
            default:
        }

        canvas.drawImage(this.hudElement.score.reference, this.hudElement.score.x, this.hudElement.score.y, this.hudElement.score.reference.width * this.hudElement.score.scale, this.hudElement.score.reference.height * this.hudElement.score.scale);

        canvas.writeText("white", "PeachesEnRegalia", hudScoreFontSize, "x " + this.data.score, hudScoreTextPosition.x, hudScoreTextPosition.y);
    }

    displayBackground() {
        canvas.drawImage(this.hudElement.infoBackGroundScore.reference, this.hudElement.infoBackGroundScore.x, this.hudElement.infoBackGroundScore.y, this.hudElement.infoBackGroundScore.reference.width * this.hudElement.infoBackGroundScore.scale, this.hudElement.infoBackGroundScore.reference.height * this.hudElement.infoBackGroundScore.scale);
        canvas.drawImage(this.hudElement.infoBackGroundLifePoint.reference, this.hudElement.infoBackGroundLifePoint.x, this.hudElement.infoBackGroundLifePoint.y, this.hudElement.infoBackGroundLifePoint.reference.width * this.hudElement.infoBackGroundLifePoint.scale, this.hudElement.infoBackGroundLifePoint.reference.height * this.hudElement.infoBackGroundLifePoint.scale);
    }
}