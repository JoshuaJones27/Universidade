var player1 = "Jogador 1"
var player2 = "Jogador 2"

//Função Edição do nome
function editarNome(){
    let jogador1 = prompt("Alterar nome Jogador 1");
    let jogador2 = prompt("Alterar nome Jogador 2");

    document.getElementById("jogador--0").innerText = jogador1;
    document.getElementById("jogador--1").innerText = jogador2;
}

var resultados, resultadoRonda, jogadorAtivo, jogoDecorrer;

init();

var ultimoDado;
//Rolar dado
function rolarDado(){
    if (jogoDecorrer) {
        var dado = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dado').style.display = 'block';
        document.getElementById('dado').src = './Imagens/dice-' + dado + '.png';


        if (dado !== 1) {
            resultadoRonda += dado;
            document.querySelector('#current--' + jogadorAtivo).textContent = resultadoRonda;
        } else {
            proximoJogador();
        }
    }
}

//Resultados do jogo

function segurar(){
    if (jogoDecorrer) {
        resultados[jogadorAtivo] += resultadoRonda;

        document.querySelector('#score--' + jogadorAtivo).textContent = resultados[jogadorAtivo];

        if (resultados[jogadorAtivo] >= 100) {
            document.querySelector('#jogador--' + jogadorAtivo).textContent = 'Vencedor!';
            document.getElementById('dado').style.display = 'none';
            document.querySelector('#jogador--' + jogadorAtivo).classList.add('winner');
            document.querySelector('#jogador--' + jogadorAtivo).classList.remove('active');
            jogoDecorrer = false;
            window.open('https://youtu.be/IrY3rTL5zM4?t=100')
        } else {
            proximoJogador();
        }
    }
}

function proximoJogador() {
    jogadorAtivo === 0 ? jogadorAtivo = 1 : jogadorAtivo = 0;
    resultadoRonda = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('#jogador--0').classList.remove('active');
    document.querySelector('#jogador--1').classList.add('active');

    document.querySelector('#jogador--0').classList.toggle('active');
    document.querySelector('#jogador--1').classList.toggle('active');

    document.getElementById('dado').style.display = './Imagens/dice-1';
}

function init() {
    resultados = [0, 0]
    jogadorAtivo = 0;
    resultadoRonda = 0;
    jogoDecorrer = true;

    document.getElementById('dado').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('#jogador--0').textContent = 'Jogador 1';
    document.querySelector('#jogador--1').textContent = 'Jogador 2';
    document.querySelector('#jogador--0').classList.remove('winner');
    document.querySelector('#jogador--1').classList.remove('winner');
    document.querySelector('#jogador--0').classList.remove('active');
    document.querySelector('#jogador--1').classList.remove('active');
    document.querySelector('#jogador--0').classList.add('active');

}