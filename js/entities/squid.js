class Squid extends Entity {
    constructor(xPos, yPos, xScale, yScale, speed, type, sprite) {
        super(xPos, yPos, 0, 0, xScale, yScale, speed, sprite)
        this.maxSpeed = this.initialSpeed * squidSpeedMultiplicator;

        this.sharkToEscape = null;
        this.type = type;

        this.canSpawnSquid = false;
        this.canSpawnCrab = false;

        this.isDying = false;
        this.isDead = false;
        this.deathFrame = squidDeathDuration;
        this.disapearFrame = squidDisapearDuration;
        this.deathTimeCount = 0;
        this.disapearTimeCount = 0;

        this.animations = {
            0: {
                move: new Animation(baseSquidMoveFrames, squidMoveAnimationFrameRate, true, false),
                die: new Animation(baseSquidDieFrames, squidDieAnimationFrameRate, false, false)
            },
            1: {
                move: new Animation(goldenSquidMoveFrames, squidMoveAnimationFrameRate, true, false),
                die: new Animation(goldenSquidDieFrames, squidDieAnimationFrameRate, false, false)
            },
            2: {
                move: new Animation(lifeSquidMoveFrames, squidMoveAnimationFrameRate, true, false),
                die: new Animation(lifeSquidDieFrames, squidDieAnimationFrameRate, false, false)
            }
        };
    }

    initialize() {
        this.sharkToEscape = entities.find(entity => entity instanceof Shark);

        if (Array.isArray(this.sharkToEscape)) {
            this.sharkToEscape = this.sharkToEscape[0];
        }

        if (this.animations) {
            if (Object.keys(this.animations).length > 0) {
                this.currentAnimation = this.animations[this.type].move;
            }
        }

        this.collisionBox.width = this.collisionBox.width * squidCollisionBoxScale.x;
        this.collisionBox.height = this.collisionBox.width * squidCollisionBoxScale.y;
    }

    update() {
        this.canMove = !this.isDying;
        this.canCollide = (this.isSpawning ? false : !this.isDead);
        this.canRender = !this.isDead;

        super.update();
    }

    move() {
        if (this.canMove) {
            let distance = Math.sqrt((this.collisionBox.x - this.sharkToEscape.position.x) ** 2 + (this.collisionBox.y - this.sharkToEscape.position.y) ** 2);
            this.speed = Math.min(this.initialSpeed * (canvas.width / distance), this.maxSpeed);
            this.animations[this.type].move.frameRate = this.animations[this.type].move.initialFrameRate * (canvas.width / distance);

            this.rotation.x = (this.collisionBox.x - this.sharkToEscape.position.x);
            this.rotation.y = (this.collisionBox.y - this.sharkToEscape.position.y);

            if (this.collisionBox.x - (this.collisionBox.width / 2) >= 0 && this.collisionBox.x + (this.collisionBox.width / 2) <= canvas.width) {
                this.direction.x = this.rotation.x / distance;
                this.setAnimation(this.animations[this.type].move);
            }

            if (this.collisionBox.y - (this.collisionBox.height / 2) >= 0 && this.collisionBox.y + (this.collisionBox.height / 2) <= canvas.height) {
                this.direction.y = this.rotation.y / distance;
                this.setAnimation(this.animations[this.type].move);
            }

            super.move();
        }
    }

    updateTimer() {
        super.updateTimer();

        if (this.isDying && !this.isDead) {
            if (this.deathTimeCount < this.deathFrame) {
                this.deathTimeCount++;
            } else {
                this.isDead = true;
            }
        }

        if (this.isDead) {
            if (this.disapearTimeCount < this.disapearFrame) {
                this.disapearTimeCount++;
            } else {
                if (this.canSpawnCrab) {
                    let randomPos = {
                        x: (canvas.width * spawnAreaMultiplicator.min) + (Math.random() * (canvas.width * spawnAreaMultiplicator.maxMinusMin)),
                        y: (canvas.height * spawnAreaMultiplicator.min) + (Math.random() * (canvas.height * spawnAreaMultiplicator.maxMinusMin))
                    }

                    let newCrab = new Crab(randomPos.x, randomPos.y, crabScale.x, crabScale.y, crabInitialSpeed, crabSprite);

                    newCrab.initialize();
                    entities.push(newCrab);
                    newCrab.isSpawning = true;
                    newCrab.canCollide = false;
                    sfxCrabSpawn.play();
                }

                if (this.canSpawnSquid) this.spawnNewSquid();
                this.spawnNewSquid();
                entities.splice(entities.indexOf(this), 1)
            }
        }
    }

    spawnNewSquid() {
        let randomPos = {
            x: (canvas.width * spawnAreaMultiplicator.min) + (Math.random() * (canvas.width * spawnAreaMultiplicator.maxMinusMin)),
            y: (canvas.height * spawnAreaMultiplicator.min) + (Math.random() * (canvas.height * spawnAreaMultiplicator.maxMinusMin))
        }

        let newSquid = new Squid(randomPos.x, randomPos.y, squidScale.x, squidScale.y, squidInitialSpeed, squidStartType, baseSquidSprite);

        newSquid.pickRandomType();

        switch (newSquid.type) {
            case 2:
                newSquid.sprite = goldenSquidMove1;
                break;
            case 3:
                newSquid.sprite = lifeSquidMove1;
                break;
            default:
        }

        newSquid.initialize();
        entities.push(newSquid);
        newSquid.isSpawning = true;
        newSquid.canCollide = false;
        sfxSquidSpawn.play();

        for (let entity of entities) {
            if (entity instanceof Squid) {
                this.canSpawnSquid = false;
            }
        }
    }

    pickRandomType() {
        let randomPick = Math.random();

        if (randomPick <= squidLifeTypeProbability) {
            this.type = 2
        } else if (randomPick <= squidGoldenTypeProbability) {
            this.type = 1;
        } else {
            this.type = 0
        }
    }
}