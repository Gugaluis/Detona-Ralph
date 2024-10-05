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
                gameVelocity: 2000,
                hitPosition: 0,
                result: 0,
                currentTime: 30,
            },

        actions:
            {
                timerId:setInterval(randomSquare,1000),
                countDownTimerId:setInterval(countDown,1000),
            } 

    };

    function countDown()
    {
        state.values.currentTime--;
        state.view.timeLeft.textContent = state.values.currentTime;

        if(state.values.currentTime <= 0)
            {
                clearInterval(state.actions.countDownTimerId)
                clearInterval(state.actions.TimerId)
                alert("Game Over! O seu resultado foi: " + state.values.result)
            }
    }

    function playSound(){
        let audio = new Audio("../assets/sounds/hit.m4a");
        audio.volume = 0.4;
        audio.play()
    }

    function randomSquare()
    {
        state.view.squares.forEach((square)=> 
            {
                square.classList.remove("enemy");
            });

        let randonNumber = Math.floor(Math.random()*);
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
                            playSound();
                        };
                });
        });
    }
    
    function init () {
        addListenerHitBox();
    }

    init();