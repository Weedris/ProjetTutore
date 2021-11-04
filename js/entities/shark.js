class Shark extends Entity {
    constructor(xPos, yPos, xScale, yScale, speed, lifePoint, sprite, animations) {
        super(xPos, yPos, 0, 0, xScale, yScale, speed, sprite, animations);
        this.position = new Vector(xPos, yPos);
        this.collisionBox = {
            hitBox: {
                jaws: {
                    left: {
                        x: this.position.x + (sharkCollisionBoxSizeBaseValue.hitBox.jaws.left.x * this.scale.x),
                        y: this.position.y + (sharkCollisionBoxSizeBaseValue.hitBox.jaws.left.y * this.scale.y),
                        width: (sharkCollisionBoxSizeBaseValue.hitBox.jaws.left.width * this.scale.x),
                        height: (sharkCollisionBoxSizeBaseValue.hitBox.jaws.left.height * this.scale.y)
                    },
                    right: {
                        x: this.position.x + (sharkCollisionBoxSizeBaseValue.hitBox.jaws.right.x * this.scale.x),
                        y: this.position.y + (sharkCollisionBoxSizeBaseValue.hitBox.jaws.right.y * this.scale.y),
                        width: (sharkCollisionBoxSizeBaseValue.hitBox.jaws.right.width * this.scale.x),
                        height: (sharkCollisionBoxSizeBaseValue.hitBox.jaws.right.height * this.scale.y)
                    }
                }
            },
            hurtBox: {
                head: {
                    left: {
                        x: this.position.x + (sharkCollisionBoxSizeBaseValue.hurtBox.head.left.x * this.scale.x),
                        y: this.position.y + (sharkCollisionBoxSizeBaseValue.hurtBox.head.left.y * this.scale.y),
                        width: (sharkCollisionBoxSizeBaseValue.hurtBox.head.left.width * this.scale.x),
                        height: (sharkCollisionBoxSizeBaseValue.hurtBox.head.left.height * this.scale.y)
                    },
                    right: {
                        x: this.position.x + (sharkCollisionBoxSizeBaseValue.hurtBox.head.right.x * this.scale.x),
                        y: this.position.y + (sharkCollisionBoxSizeBaseValue.hurtBox.head.right.y * this.scale.y),
                        width: (sharkCollisionBoxSizeBaseValue.hurtBox.head.right.width * this.scale.x),
                        height: (sharkCollisionBoxSizeBaseValue.hurtBox.head.right.height * this.scale.y)
                    }
                },
                butt: {
                    left: {
                        x: this.position.x + (sharkCollisionBoxSizeBaseValue.hurtBox.butt.left.x * this.scale.x),
                        y: this.position.y + (sharkCollisionBoxSizeBaseValue.hurtBox.butt.left.y * this.scale.y),
                        width: (sharkCollisionBoxSizeBaseValue.hurtBox.butt.left.width * this.scale.x),
                        height: (sharkCollisionBoxSizeBaseValue.hurtBox.butt.left.height * this.scale.y)
                    },
                    right: {
                        x: this.position.x + (sharkCollisionBoxSizeBaseValue.hurtBox.butt.right.x * this.scale.x),
                        y: this.position.y + (sharkCollisionBoxSizeBaseValue.hurtBox.butt.right.y * this.scale.y),
                        width: (sharkCollisionBoxSizeBaseValue.hurtBox.butt.right.width * this.scale.x),
                        height: (sharkCollisionBoxSizeBaseValue.hurtBox.butt.right.height * this.scale.y)
                    }
                },
                tail: {
                    left: {
                        x: this.position.x + (sharkCollisionBoxSizeBaseValue.hurtBox.tail.left.x * this.scale.x),
                        y: this.position.y + (sharkCollisionBoxSizeBaseValue.hurtBox.tail.left.y * this.scale.y),
                        width: (sharkCollisionBoxSizeBaseValue.hurtBox.tail.left.width * this.scale.x),
                        height: (sharkCollisionBoxSizeBaseValue.hurtBox.tail.left.height * this.scale.y)
                    },
                    right: {
                        x: this.position.x + (sharkCollisionBoxSizeBaseValue.hurtBox.tail.right.x * this.scale.x),
                        y: this.position.y + (sharkCollisionBoxSizeBaseValue.hurtBox.tail.right.y * this.scale.y),
                        width: (sharkCollisionBoxSizeBaseValue.hurtBox.tail.right.width * this.scale.x),
                        height: (sharkCollisionBoxSizeBaseValue.hurtBox.tail.right.height * this.scale.y)
                    }
                }
            }
        };

        this.lifePoint = lifePoint;
        this.isFacingLeft = false;
        this.hasBeenHit = false;
        this.isDead = false;

        this.isEating = false;
        this.eatingFrame = sharkEatDuration;
        this.eatingTimerCount = 0;

        this.isTakingDamage = false;
        this.takeDamageFrame = sharkTakeDamageDuration;
        this.takeDamageTimerCount = 0;

        this.isInvincible = false;
        this.invincibleFrame = sharkInvincibleTimeDuration;
        this.invincibleTimerCount = 0;

        this.animations = {
            idle: {
                left: new Animation(sharkIdleLeftFrames, sharkIdleAnimationFrameRate, true, true),
                right: new Animation(sharkIdleRightFrames, sharkIdleAnimationFrameRate, true, true)
            },
            move: {
                left: new Animation(sharkMoveLeftFrames, sharkMoveAnimationFrameRate, true, true),
                right: new Animation(sharkMoveRightFrames, sharkMoveAnimationFrameRate, true, true)
            },
            eat: {
                left: new Animation(sharkEatLeftFrames, sharkEatAnimationFrameRate, false, true),
                right: new Animation(sharkEatRightFrames, sharkEatAnimationFrameRate, false, true)
            },
            hurt: {
                normal: {
                    left: new Animation(sharkHurtLeftFrames, sharkHurtAnimationFrameRate, true, true),
                    right: new Animation(sharkHurtRightFrames, sharkHurtAnimationFrameRate, true, true)
                },
                red: {
                    left: new Animation(sharkHurtRedLeftFrames, sharkHurtAnimationFrameRate, true, true),
                    right: new Animation(sharkHurtRedRightFrames, sharkHurtAnimationFrameRate, true, true)
                }
            },
            die: {
                left: new Animation(sharkDieLeftFrames, sharkDieAnimationFrameRate, false, true),
                right: new Animation(sharkDieRightFrames, sharkDieAnimationFrameRate, false, true)
            }
        };
    }

    initialize() {
        super.initialize();
        this.canRotate = false;

        this.animations.idle.left.flippedReference = this.animations.idle.right;
        this.animations.idle.right.flippedReference = this.animations.idle.left;
        this.animations.move.left.flippedReference = this.animations.move.right;
        this.animations.move.right.flippedReference = this.animations.move.left;
        this.animations.eat.left.flippedReference = this.animations.eat.right;
        this.animations.eat.right.flippedReference = this.animations.eat.left;
        this.animations.hurt.normal.left.flippedReference = this.animations.hurt.normal.right;
        this.animations.hurt.normal.right.flippedReference = this.animations.hurt.normal.left;
        this.animations.hurt.red.left.flippedReference = this.animations.hurt.red.right;
        this.animations.hurt.red.right.flippedReference = this.animations.hurt.red.left;
        this.animations.die.left.flippedReference = this.animations.die.right;
        this.animations.die.right.flippedReference = this.animations.die.left;
    }

    update() {
        this.canCollide = !this.isDead;
        this.canMove = !this.isDead;

        this.checkCollisions();
        super.update();
    }

    move() {
        if (this.canMove) {
            this.direction.x = 0;
            this.direction.y = 0;

            if (!this.isEating && (!this.isDead && !this.hasBeenHit)) this.setAnimation(this.animations.idle);

            if (left[1] && ((this.isFacingLeft ? this.collisionBox.hurtBox.head.left.x : this.collisionBox.hurtBox.head.right.x) - ((this.isFacingLeft ? this.collisionBox.hurtBox.head.left.width : this.collisionBox.hurtBox.head.right.width) / 2) >= 0)) {
                this.direction.x = -1;
                this.isFacingLeft = true;
                if (!this.isEating && (!this.isDead && !this.hasBeenHit)) this.setAnimation(this.animations.move);
            }
            if (up[1] && ((this.isFacingLeft ? this.collisionBox.hurtBox.head.left.y : this.collisionBox.hurtBox.head.right.y) - ((this.isFacingLeft ? this.collisionBox.hurtBox.head.left.height : this.collisionBox.hurtBox.head.right.height) / 2) >= 0)) {
                this.direction.y = -1;
                if (!this.isEating && (!this.isDead && !this.hasBeenHit)) this.setAnimation(this.animations.move);
            }
            if (right[1] && ((this.isFacingLeft ? this.collisionBox.hurtBox.head.left.x : this.collisionBox.hurtBox.head.right.x) + ((this.isFacingLeft ? this.collisionBox.hurtBox.head.left.width : this.collisionBox.hurtBox.head.right.width) / 2) <= canvas.width)) {
                this.direction.x = 1;
                this.isFacingLeft = false;
                if (!this.isEating && (!this.isDead && !this.hasBeenHit)) this.setAnimation(this.animations.move);
            }
            if (down[1] && ((this.isFacingLeft ? this.collisionBox.hurtBox.head.left.y : this.collisionBox.hurtBox.head.right.y) + ((this.isFacingLeft ? this.collisionBox.hurtBox.head.left.height : this.collisionBox.hurtBox.head.right.height) / 2) <= canvas.height)) {
                this.direction.y = 1;
                if (!this.isEating && (!this.isDead && !this.hasBeenHit)) this.setAnimation(this.animations.move);
            }


            move(this.position, this.direction, this.speed);
            move(this.collisionBox.hitBox.jaws.left, this.direction, this.speed);
            move(this.collisionBox.hitBox.jaws.right, this.direction, this.speed);
            move(this.collisionBox.hurtBox.head.left, this.direction, this.speed);
            move(this.collisionBox.hurtBox.head.right, this.direction, this.speed);
            move(this.collisionBox.hurtBox.butt.left, this.direction, this.speed);
            move(this.collisionBox.hurtBox.butt.right, this.direction, this.speed);
            move(this.collisionBox.hurtBox.tail.left, this.direction, this.speed);
            move(this.collisionBox.hurtBox.tail.right, this.direction, this.speed);
        }
    }

    checkCollisions() {
        if (this.canCollide) {
            let tabCrab = [];
            let tabSquid = [];

            for (let entity of entities) {
                if (entity instanceof Crab) {
                    tabCrab.push(entity);
                } else if (entity instanceof Squid) {
                    tabSquid.push(entity);
                }
            }

            for (let crab of tabCrab) {
                if ((collisionBetweenRectangle((this.isFacingLeft ? this.collisionBox.hurtBox.head.left : this.collisionBox.hurtBox.head.right), crab.collisionBox) || (
                        collisionBetweenRectangle((this.isFacingLeft ? this.collisionBox.hurtBox.butt.left : this.collisionBox.hurtBox.butt.right), crab.collisionBox) ||
                        collisionBetweenRectangle((this.isFacingLeft ? this.collisionBox.hurtBox.tail.left : this.collisionBox.hurtBox.tail.right), crab.collisionBox)))
                        && crab.canCollide) {
                    if (!this.hasBeenHit) {
                        crab.isAttacking = true;
                        this.hasBeenHit = true;
                        this.lifePoint--;
                        hud.isLifePointDecreasing = true;
                        this.isTakingDamage = true;
                        sfxCrabAttack.play();
                        sfxSharkHurt.play();

                        if (this.lifePoint == 0) {
                            this.isDead = true;
                            this.isInvincible = true;
                            this.setAnimation(this.animations.hurt.red);
                            sfxSharkDie.play();
                        } else {
                            this.setAnimation(this.animations.hurt.red);
                        }
                    }
                } else {
                    if (this.hasBeenHit && !this.isInvincible) {
                        this.isInvincible = true;
                    }
                }
            }

            for (let squid of tabSquid) {
                if ((collisionBetweenRectangle((this.isFacingLeft ? this.collisionBox.hitBox.jaws.left : this.collisionBox.hitBox.jaws.right), squid.collisionBox) 
                                                && (!squid.isDead && !squid.isDying)) 
                                                && squid.canCollide) {
                    this.isEating = true;
                    squid.isDying = true;
                    hud.data.squidEaten++;
                    squid.setAnimation(squid.animations[squid.type].die);
                    this.setAnimation(this.animations.eat);
                    sfxSharkEat.play();
                    sfxSquidDie.play();

                    switch (squid.type) {
                        case 1:
                            hud.data.score += squidScoreGivenByGoldenType;
                            sfxGoldenSquidDieEffect.play();
                            break;
                        case 2:
                            hud.data.score++;
                            if (this.lifePoint >= 1 && this.lifePoint <= 2) {
                                this.lifePoint++;
                                hud.isLifePointIncreasing = true;
                                sfxSharkGainLifePoint.play();
                            }
                            break;
                        default:
                            hud.data.score++;
                    }

                    if (hud.data.squidEaten % crabSpawnSquidEatenModulo == 0) {
                        squid.canSpawnCrab = true;
                    }

                    if (hud.data.squidEaten % squidSpawnSquidEatenModulo == 0) {
                        squid.canSpawnSquid = true;
                    }
                }
            }
        }
    }

    updateTimer() {
        if (this.isTakingDamage) {
            if (this.takeDamageTimerCount < this.takeDamageFrame) {
                this.takeDamageTimerCount++;
            } else {
                this.takeDamageTimerCount = 0;
                this.isTakingDamage = false;

                if (this.isDead) {
                    this.setAnimation(this.animations.die);
                } else {
                    this.setAnimation(this.animations.hurt.normal);
                }
            }
        }

        if (this.isEating) {
            if (this.eatingTimerCount < this.eatingFrame) {
                this.eatingTimerCount++;
            } else {
                this.eatingTimerCount = 0;
                this.isEating = false;
            }
        }

        if (this.isInvincible) {
            if (this.invincibleTimerCount < this.invincibleFrame) {
                this.invincibleTimerCount++;
            } else {
                this.invincibleTimerCount = 0;
                this.hasBeenHit = false;
                this.isInvincible = false;

                if (this.isDead) {
                    isGameOver = true;
                }
            }
        }
    }

    setAnimation(animation) {
        if (this.isFacingLeft) {
            if (!this.currentAnimation.left.isLooping) this.currentAnimation.left.reset();
            this.currentAnimation = animation;
        } else {
            if (!this.currentAnimation.right.isLooping) this.currentAnimation.right.reset();
            this.currentAnimation = animation;
        }
    }

    render() {
        if (this.canRender) {
            if (this.canAnimate) {
                (this.isFacingLeft ? this.currentAnimation.left : this.currentAnimation.right).update();
                (this.isFacingLeft ? this.currentAnimation.left : this.currentAnimation.right).render(this.position.x - (this.sprite.width * this.scale.x) / 2,
                    this.position.y - (this.sprite.height * this.scale.y) / 2,
                    this.sprite.width * this.scale.x,
                    this.sprite.height * this.scale.y);
            } else {
                canvas.drawImage(this.sprite,
                    this.position.x - (this.sprite.width * this.scale.x) / 2,
                    this.position.y - (this.sprite.height * this.scale.y) / 2,
                    this.sprite.width * this.scale.x,
                    this.sprite.height * this.scale.y);
            }
        }
    }

    showCollisionBox() {
        if (this.displayCollisionBox) {
            canvas.drawRect(hurtBoxColor,
                (this.isFacingLeft ? this.collisionBox.hurtBox.head.left : this.collisionBox.hurtBox.head.right).x - ((this.isFacingLeft ? this.collisionBox.hurtBox.head.left : this.collisionBox.hurtBox.head.right).width / 2),
                (this.isFacingLeft ? this.collisionBox.hurtBox.head.left : this.collisionBox.hurtBox.head.right).y - ((this.isFacingLeft ? this.collisionBox.hurtBox.head.left : this.collisionBox.hurtBox.head.right).height / 2),
                (this.isFacingLeft ? this.collisionBox.hurtBox.head.left : this.collisionBox.hurtBox.head.right).width,
                (this.isFacingLeft ? this.collisionBox.hurtBox.head.left : this.collisionBox.hurtBox.head.right).height);
            canvas.drawRect(hurtBoxColor,
                (this.isFacingLeft ? this.collisionBox.hurtBox.butt.left : this.collisionBox.hurtBox.butt.right).x - ((this.isFacingLeft ? this.collisionBox.hurtBox.butt.left : this.collisionBox.hurtBox.butt.right).width / 2),
                (this.isFacingLeft ? this.collisionBox.hurtBox.butt.left : this.collisionBox.hurtBox.butt.right).y - ((this.isFacingLeft ? this.collisionBox.hurtBox.butt.left : this.collisionBox.hurtBox.butt.right).height / 2),
                (this.isFacingLeft ? this.collisionBox.hurtBox.butt.left : this.collisionBox.hurtBox.butt.right).width,
                (this.isFacingLeft ? this.collisionBox.hurtBox.butt.left : this.collisionBox.hurtBox.butt.right).height);
            canvas.drawRect(hurtBoxColor,
                (this.isFacingLeft ? this.collisionBox.hurtBox.tail.left : this.collisionBox.hurtBox.tail.right).x - ((this.isFacingLeft ? this.collisionBox.hurtBox.tail.left : this.collisionBox.hurtBox.tail.right).width / 2),
                (this.isFacingLeft ? this.collisionBox.hurtBox.tail.left : this.collisionBox.hurtBox.tail.right).y - ((this.isFacingLeft ? this.collisionBox.hurtBox.tail.left : this.collisionBox.hurtBox.tail.right).height / 2),
                (this.isFacingLeft ? this.collisionBox.hurtBox.tail.left : this.collisionBox.hurtBox.tail.right).width,
                (this.isFacingLeft ? this.collisionBox.hurtBox.tail.left : this.collisionBox.hurtBox.tail.right).height);
            canvas.drawRect(hitBoxColor,
                (this.isFacingLeft ? this.collisionBox.hitBox.jaws.left : this.collisionBox.hitBox.jaws.right).x - ((this.isFacingLeft ? this.collisionBox.hitBox.jaws.left : this.collisionBox.hitBox.jaws.right).width / 2),
                (this.isFacingLeft ? this.collisionBox.hitBox.jaws.left : this.collisionBox.hitBox.jaws.right).y - ((this.isFacingLeft ? this.collisionBox.hitBox.jaws.left : this.collisionBox.hitBox.jaws.right).height / 2),
                (this.isFacingLeft ? this.collisionBox.hitBox.jaws.left : this.collisionBox.hitBox.jaws.right).width,
                (this.isFacingLeft ? this.collisionBox.hitBox.jaws.left : this.collisionBox.hitBox.jaws.right).height);
        }
    }
}