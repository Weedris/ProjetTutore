class Animation {
    constructor(frames, frameRate, isLooping, useFlipReference) {
        this.allFrames = frames;
        this.flippedReference = null;
        this.useFlipReference = useFlipReference;
        this.frameCount = 0;
        this.initialFrameRate = frameRate;
        this.frameRate = frameRate;
        this.waitBetweenFrames = 0;
        this.isLooping = isLooping;
        this.isFinished = false;
    }

    reset() {
        this.waitBetweenFrames = 0;
        this.frameCount = 0;

        if (this.useFlipReference) {
            this.flippedReference.waitBetweenFrames = 0;
            this.flippedReference.frameCount = 0;
        }  
    }

    update() {
        if (this.frameCount < this.allFrames.length) {
            if (this.waitBetweenFrames < (gameFrameRate / this.frameRate)) {
                this.waitBetweenFrames++;

                if (this.useFlipReference) {
                    this.flippedReference.waitBetweenFrames++;
                }
            } else {
                this.waitBetweenFrames = 0;
                this.frameCount++;

                if (this.useFlipReference) {
                    this.flippedReference.waitBetweenFrames = 0;
                    this.flippedReference.frameCount++;
                }
            }
        } else {
            if (this.isLooping) {
                this.frameCount = 0;

                if (this.useFlipReference) {
                    this.flippedReference.frameCount = 0;
                }
            }
        }
    }

    render(x, y, width, height) {
        canvas.drawImage(this.allFrames[this.frameCount < this.allFrames.length ? this.frameCount : this.frameCount - 1], x, y, width, height);
    }
}