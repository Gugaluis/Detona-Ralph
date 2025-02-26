const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        ally: document.querySelector(".ally"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },

    values: {
        gameVelocity: 1200,
        hitPosition: 0,
        allyPosition: 0, 
        result: 0,
        currentTime: 50,
    },

    actions: {
        timerId: setInterval(randomSquare, 1000),
        allyTimerId: setInterval(randomSquare2, 600), 
        countDownTimerId: setInterval(countDown, 600),
    }
};

function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
    clearInterval(state.actions.allyTimerId);

    playSound("gameover");

    setTimeout(() => {
        alert("Game Over! O seu resultado foi: " + state.values.result);
    }, 100);
}

function playSound(audioName) {
    let audio = new Audio(`../assets/sounds/${audioName}.m4a`);
    audio.volume = 0.4;
    audio.play();
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randonNumber = Math.floor(Math.random() * 25);
    let randomSquare = state.view.squares[randonNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function randomSquare2() {
    state.view.squares.forEach((square) => {
        square.classList.remove("ally");
    });

    let randonNumber = Math.floor(Math.random() * 25);
    let randomSquare = state.view.squares[randonNumber];
    randomSquare.classList.add("ally");
    state.values.allyPosition = randomSquare.id;
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            } else if (square.id === state.values.allyPosition) {
                state.values.allyPosition = null;
                playSound("miss");
                endGame();
            }
        });
    });
}

function init() {
    addListenerHitBox();
}

init();
