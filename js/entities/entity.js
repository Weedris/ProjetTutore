class Entity {
    constructor(xPos, yPos, xRot, yRot, xScale, yScale, speed, sprite) {
        this.collisionBox = {
            x: xPos,
            y: yPos,
            width: sprite.width * xScale,
            height: sprite.height * yScale
        };

        this.direction = new Vector(0, 0);
        this.rotation = new Vector(xRot, yRot);
        this.scale = new Vector(xScale, yScale)

        this.initialSpeed = speed;
        this.speed = speed;

        this.canMove = true;
        this.canRotate = true;
        this.canCollide = true;
        this.canRender = true;
        this.canAnimate = true;

        this.isSpawning = false;
        this.spawnFrame = spawnDuration;
        this.spawnTimerCount = 0

        this.sprite = sprite;
        this.animations = {};
        this.spawnAnimation = new Animation(spawnFrames, spawnAnimationFrameRate, true, false);
        this.currentAnimation = null;
        this.displayCollisionBox = false;        
    }

    initialize() {
        if (this.animations) {
            if (Object.keys(this.animations).length > 0) {
                this.currentAnimation = Object.entries(this.animations)[0][1];
            }
        }
    }

    update() {
        this.move();
        this.updateTimer();
        this.render();
        this.showCollisionBox();
    }

    move() {
        if (this.canMove) {
            if (!(this.collisionBox.x - ((this.sprite.width * this.scale.x) / 2) >= 0) || !(this.collisionBox.x + (this.collisionBox.width / 2) <= canvas.width)) {
                this.direction.x = 0;
            }

            if (!(this.collisionBox.y - ((this.sprite.width * this.scale.x) / 2) >= 0) || !(this.collisionBox.y + (this.collisionBox.height / 2) <= canvas.height)) {
                this.direction.y = 0;
            }

            move(this.collisionBox, this.direction, this.speed);
        }
    }

    updateTimer() {
        if (this.isSpawning) {
            if (this.spawnTimerCount < this.spawnFrame) {
                this.spawnTimerCount++;
            } else {
                this.isSpawning = false;
                this.canCollide = true;
            }
        }
    }

    setAnimation(animation) {
        if (animation && this.currentAnimation) {
            if (!this.currentAnimation.isLooping) this.currentAnimation.reset();
            this.currentAnimation = animation;
        }
    }

    rotateCompute() {
        let angle = Math.atan2(this.rotation.y, this.rotation.x);
        let degrees = 180 * angle / Math.PI;
        let rotation = (90 + Math.round(degrees)) % 360;
        return rotation * Math.PI / 180
    }

    render() {
        if (this.canRender) {
            if(this.isSpawning)
            {
                this.spawnAnimation.update();
                this.spawnAnimation.render(this.collisionBox.x - ((this.sprite.width * this.scale.x) / 2),
                                            this.collisionBox.y - ((this.sprite.height * this.scale.y) / 2), 
                                            this.sprite.width * this.scale.x, 
                                            this.sprite.height * this.scale.y);
            }

            if (this.canRotate) {
                canvas.ctx.save();
                canvas.ctx.translate(this.collisionBox.x, this.collisionBox.y);
                canvas.ctx.rotate(this.rotateCompute());

                if (this.canAnimate) {
                    this.currentAnimation.update();
                    this.currentAnimation.render(
                        - (this.sprite.width * this.scale.x)/2,
                        - (this.sprite.height * this.scale.y)/2,
                        this.sprite.width * this.scale.x,
                        this.sprite.height * this.scale.y
                    );
                } else {
                    canvas.drawImage(
                        this.sprite,
                        this.collisionBox.x - ((this.sprite.width * this.scale.x) / 2),
                        this.collisionBox.y - ((this.sprite.height * this.scale.y) / 2),
                        this.sprite.width * this.scale.x,
                        this.sprite.height * this.scale.y);
                }

                canvas.ctx.restore();
            } else {
                if (this.canAnimate) {
                    this.currentAnimation.update();
                    this.currentAnimation.render(
                        this.collisionBox.x - ((this.sprite.width * this.scale.x) / 2),
                        this.collisionBox.y - ((this.sprite.height * this.scale.y) / 2),
                        this.sprite.width * this.scale.x,
                        this.sprite.height * this.scale.y);
                } else {
                    canvas.drawImage(
                        this.sprite,
                        this.collisionBox.x - ((this.sprite.width * this.scale.x) / 2),
                        this.collisionBox.y - ((this.sprite.height * this.scale.y) / 2),
                        this.sprite.width * this.scale.x,
                        this.sprite.height * this.scale.y);
                }
            }
        }
    }

    showCollisionBox() {
        if (this.displayCollisionBox) {
            canvas.drawRect(hurtBoxColor,
                this.collisionBox.x - (this.collisionBox.width / 2),
                this.collisionBox.y - (this.collisionBox.height / 2),
                this.collisionBox.width,
                this.collisionBox.height);
        }
    }
}