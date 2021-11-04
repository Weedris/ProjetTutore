class Background {
    constructor(music) {
        this.animation = new Animation(backgroundFrames, backgroundAnimationFrameRate, true, false)
        this.music = music;
    }

    render(){
        this.animation.update();
        this.animation.render(0, 0, canvas.width, canvas.height);
    }
}