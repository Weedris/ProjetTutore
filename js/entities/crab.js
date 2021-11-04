class Crab extends Entity{
    constructor(xPos, yPos, xScale, yScale, speed, sprite) {
        super(xPos, yPos, 0, 0, xScale, yScale, speed, sprite);
        this.isAttacking = false;
        this.attackFrame = crabAttackDuration;
        this.attackTimerCount = 0;

        this.animations = {
            move: new Animation(crabMoveFrames, crabMoveAnimationFrameRate, true, false),
            attack: new Animation(crabAttackFrames, crabAttackAnimationFrameRate, false, false)
          };
    };

    initialize(){
        super.initialize();
        let sharkToDodge = entities.find(entity => entity instanceof Shark);

        if (Array.isArray(sharkToDodge)) {
            sharkToDodge = sharkToDodge[0];
        }

        this.direction = new Vector(Math.random()/2 + 0.5, Math.random()/2 + 0.5);
        if(sharkToDodge.position.x > canvas.width/2) this.direction.x = -this.direction.x;
        if(sharkToDodge.position.y > canvas.height/2) this.direction.y = -this.direction.y;
        
        this.canRotate = false;

        this.collisionBox.width = this.collisionBox.width * crabCollisionBoxScale.x;
        this.collisionBox.height = this.collisionBox.width * crabCollisionBoxScale.y;
    }

    update() {
        super.update();
    }

    move() {
        if(this.canMove)
        {
            if (!this.isAttacking) {
                this.setAnimation(this.animations.move)
            } else {
                this.setAnimation(this.animations.attack)
            }
    
            if (this.collisionBox.x - (this.collisionBox.width / 2) < 0 || this.collisionBox.x + (this.collisionBox.width / 2) > canvas.width) {
                this.direction.x = -this.direction.x;
            }
    
            if (this.collisionBox.y - (this.collisionBox.height / 2) < 0 || this.collisionBox.y + (this.collisionBox.height / 2) > canvas.height) {
                this.direction.y = -this.direction.y;
            }

            move(this.collisionBox, this.direction, this.speed);
        }
    }

    updateTimer() {
        super.updateTimer();

        if (this.isAttacking) {
            if (this.attackTimerCount < this.attackFrame) {
                this.attackTimerCount++;
            } else {
                this.attackTimerCount = 0;
                this.isAttacking = false;
            }
        }
    }
}