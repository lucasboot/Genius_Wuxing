let order = [];
let clickedOrder =[];
let score = 0;
/*
0 -> earth
1 -> fire
2 -> wind
3 -> water
*/

const water = document.querySelector('.water');
const wind = document.querySelector('.wind');
const fire = document.querySelector('.fire');
const earth = document.querySelector('.earth');

//Ordem aleatória das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checar se houve erro na ordem
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}


//funcao para o clique do usuario

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//função que retorna a cor
let createColorElement= (color) => {
    if(color == 0) {
        return earth;
    } else if(color == 1) {
        return fire;
    } else if (color == 2) {
        return wind;
    } else if (color == 3) {
        return water;
    }
}

//funcao para o prox nivel
let nextLevel= () => {
    score++;
    shuffleOrder();
}

//funcao para gameover

let gameOver = () =>{
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para recomeçar`);
    order = [];
    clickedOrder = [];
    playGame();
}

let playGame = () => {
    alert("Bem vindo ao jogo!");
    score = 0;
    nextLevel();
}
earth.onclick = () => click(0);
fire.onclick = () => click(1);
wind.onclick = () => click(2);
water.onclick = () => click(3);


playGame();