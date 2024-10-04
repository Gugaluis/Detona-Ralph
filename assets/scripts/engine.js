const state = 
    {
        view:{
            squares:document.querySelectorAll(".square"),
            enemy: document.querySelector(".enemy"),
            timeLeft: document.querySelector("#time-left"),
            score: document.querySelector("#score"),
        },


        value: {},
    }

    function randomSquare(){
        state.view.squares.forEach((square)=>{
            square.classList.remove("enemy");
        })

        let randonNumber = Math.floor(Math.randon()*9);
        let randomSquare = state.view.squares[randonNumber];
        randomSquare.classList.add("enemy");
    }



    function addListenerHitBox(){
        state.view.squares.forEach((squares)=> {});
    }
    
    function init () {
        alert ("ola");
        randomSquare();
    }

    initialize();