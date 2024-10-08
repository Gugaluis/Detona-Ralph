const state = 
    {
        view:
            {
                squares:document.querySelectorAll(".square"),
                enemy: document.querySelector(".enemy"),
                timeLeft: document.querySelector("#time-left"),
                score: document.querySelector("#score"),
            },

        values: 
            {
                gameVelocity: 1000,
                hitPosition: 0,
                result: 0,
                currentTime: 40,
            },

        actions:
            {
                timerId:setInterval(randomSquare,600),
                countDownTimerId:setInterval(countDown,1000),
            } 

    };

    function countDown() {
        state.values.currentTime--;
        state.view.timeLeft.textContent = state.values.currentTime;
    
        if (state.values.currentTime <= 0) {
            clearInterval(state.actions.countDownTimerId);
            clearInterval(state.actions.timerId);
    
            playSound("gameover");
    

            setTimeout(() => 
            {
                alert("Game Over! O seu resultado foi: " + state.values.result);
            }, 100); 
        }
    }


    function playSound(audioName){
        let audio = new Audio(`../assets/sounds/${audioName}.m4a`);
        audio.volume = 0.4;
        audio.play()
    }



    function randomSquare()
    {
        state.view.squares.forEach((square)=> 
            {
                square.classList.remove("enemy");
            });

        let randonNumber = Math.floor(Math.random()*25);
        let randomSquare = state.view.squares[randonNumber];
        randomSquare.classList.add("enemy");
        state.values.hitPosition = randomSquare.id;
    }

    function addListenerHitBox(){
        state.view.squares.forEach((square)=> 
        {
            square.addEventListener("mousedown", () => 
                {
                    if(square.id === state.values.hitPosition)
                        {
                            state.values.result++
                            state.view.score.textContent = state.values.result;
                            state.values.hitPosition = null;
                            playSound("hit");
                        };
                });
        });
    }

    function init () {
        addListenerHitBox();
    }

    init();