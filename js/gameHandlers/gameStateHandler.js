function updateGamestate() {
    let displayMenu = null;

    if (!isGamePaused && !isfirstTimePlay) {
        for (let element of entities) {
            element.update();
        }
    } else {
        for (let element of entities) {
            element.render();
        }

        displayMenu = "pause";
    }

    if (isfirstTimePlay) {
        displayMenu = "start";

        if (((up[1] || right[1]) || (down[1] || left[1])) || pause[1]) {
            playBgm(gameBgm, gameBgmInGameVolume);
            isfirstTimePlay = false;
            isButtonMenuPressedOnce = true;
        }
    } else {
        if (isGameOver) {
            displayMenu = "gameOver";
            gameBgm.volume = gameBgmMenuVolume;
        }

        if (pause[1]) {
            if (!isButtonMenuPressedOnce) {
                if (!isGameOver) {
                    if (isGamePaused) {
                        isGamePaused = false;
                        gameBgm.volume = gameBgmInGameVolume;
                    } else {
                        isGamePaused = true;
                        gameBgm.volume = gameBgmMenuVolume;
                    }
                } else {
                    initializeSounds();
                    initializeGameElements();
                }

                isButtonMenuPressedOnce = true;
            }

        } else {
            isButtonMenuPressedOnce = false;
        }
    }

    hud.displayElements();
    if (displayMenu) hud.displayMenu(displayMenu);
}