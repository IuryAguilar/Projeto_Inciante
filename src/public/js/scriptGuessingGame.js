const MIN_NUMBER = 0;
const MAX_ATTEMPTS = 15;

let maxNumber = 100;
let randomNumber = generateRandomNumber();
let attemptCounter = 0;
let attemptHistory = [];

const elements = {
    guessing: document.getElementById('guessing'),
    result: document.getElementById('result'),
    attempts: document.getElementById('attempts'),
    guessButton: document.getElementById('guessBtn'),
    tutorial: document.getElementById('tutorialP'),
    guessBtn: document.getElementById('guessBtn'),
    newGameBtn: document.getElementById('newGameBtn'),
    mediumRBtn: document.getElementById('mediumRBtn'),
    easyRBtn: document.getElementById('easyRBtn'),
    hardRBtn: document.getElementById('hardRBtn')
};

function generateRandomNumber() {
    return Math.floor(
        Math.random() * (maxNumber - MIN_NUMBER + 1) + MIN_NUMBER
    );
}

function guessNumber() {
    const inputValue = elements.guessing.value.trim();

    if (inputValue === "") {
        showResult("Digite um número!");
        return;
    }

    const guess = Number(inputValue);

    if (!Number.isInteger(guess) || guess < MIN_NUMBER || guess > maxNumber) {
        showResult(`Digite um número inteiro entre ${MIN_NUMBER} e ${maxNumber}.`);
        return;
    }

    attemptCounter++;
    attemptHistory.push(guess);

    if (guess === randomNumber) {
        showResult(`Parabéns! Você acertou em ${attemptCounter} tentativas!`);
        finishGame();
    } else if (attemptCounter === MAX_ATTEMPTS) {
        showResult(
            `Game over! O número era ${randomNumber}. Você não tem mais tentativas.`
        );
        finishGame();
    } else if (guess < randomNumber) {
        showResult("Muito baixo!");
    } else {
        showResult("Muito alto!");
    }

    updateGameInfo();
    elements.guessing.value = "";
    elements.guessing.focus();
}

function startNewGame(newMaxNumber = maxNumber, message) {
    maxNumber = newMaxNumber;
    randomNumber = generateRandomNumber();
    attemptCounter = 0;
    attemptHistory = [];

    elements.guessButton.disabled = false;
    elements.guessing.value = "";
    elements.result.textContent = "-";
    elements.tutorial.textContent = message;

    updateGameInfo();
    elements.guessing.focus();
}

function newGame() {
    startNewGame(
    100,
    "A máquina escolheu um número entre 0 e 100. Tente acertar em até 15 tentativas."
    );
}

elements.easyRBtn.addEventListener("click", () => {
    startNewGame(
    50,
    "Modo fácil: a máquina escolheu um número entre 0 e 50. Você tem 15 tentativas."
    );
})

elements.hardRBtn.addEventListener("click", () => {
    startNewGame(
    500,
    "Modo difícil: a máquina escolheu um número entre 0 e 500. Você tem 15 tentativas. Boa sorte!"
    );
})

function showResult(message) {
    elements.result.textContent = message;
}

function updateGameInfo() {
    elements.attempts.textContent = attemptHistory.join(", ");
}

function finishGame() {
    elements.guessButton.disabled = true;
}

elements.guessBtn.addEventListener("click", () => {
    guessNumber()
})

elements.guessing.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        guessNumber();
    }
});

elements.newGameBtn.addEventListener("clicl", () => {
    newGame()
})

elements.mediumRBtn.addEventListener("click", () => {
    newGame()
})
