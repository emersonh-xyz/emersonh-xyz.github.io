let grimaceShake = document.getElementById('grimaceShake');
let scoreElement = document.getElementById('score')
let score = 0;
let difficultyInterval = 500;

function randomizeShakePosition() {

    let topValue = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
    let bottomValue = Math.floor(Math.random() * (500 - 1 + 1) + 1)
    let leftValue = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
    let rightValue = Math.floor(Math.random() * (1000 - 1 + 1) + 1)

    grimaceShake.style.top = `${topValue}px`
    grimaceShake.style.bottom = `${bottomValue}px`
    grimaceShake.style.left = `${leftValue}px`
    grimaceShake.style.right = `${rightValue}px`


}

function win() {
    alert('you win!');
    increaseScore();
}

function increaseScore() {
    score++;
    scoreElement.innerText = `Score: ${score}`
}

function setDifficulty(e) {
    switch (e.target.id) {
        case "easy":
            difficultyInterval = 500;
            break;
        case "hard":
            difficultyInterval = 100;
            break;
        case "master":
            difficultyInterval = 50
            break;
    }

    clearInterval(interval);
    interval = setInterval(randomizeShakePosition, difficultyInterval)
}

let interval = setInterval(randomizeShakePosition, difficultyInterval)
