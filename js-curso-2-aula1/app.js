// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Digite um numero de 1 a 10';

//Eu posso criar uma função para alterar os textos do meu html, criando uma boa prática para melhor visibilidade das alterações feitas pelo JavaScript
let listaNumeroSecreto = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroSecreto();
let tentativas = 1;
//  função com parâmetro
function campo(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto
responsiveVoice.speak(texto, 'Brazillian Portugues Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    campo('h1', 'Jogo do Número Secreto');
    campo('p', `Coloque um Número Entre 1 a ${numeroLimite}`);
}

exibirMensagemInicial();


//função que verifica o numero do chute equivale ao numero aleatorio
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio) {
        let primeiraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto, após ${tentativas} ${primeiraTentativa}`;
        
        campo('h1', 'Parábens!');
        campo('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute < numeroAleatorio) {
        campo('p', `O número secreto é maior que ${chute}`);
    } else {
        campo('p', `O número secreto é menor que ${chute}`);
    }
        tentativas++
        limparCampo()

}
// função com retorno, quando é usada ela retorna e armazena na variavel
function gerarNumeroSecreto() {
    let numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
    let limitadorDaLista = listaNumeroSecreto.length;

    if(limitadorDaLista == numeroLimite) {
        listaNumeroSecreto = [];
    }  
    if (listaNumeroSecreto.includes(numeroSecreto)){
        return gerarNumeroSecreto;
    } else {
        listaNumeroSecreto.push(numeroSecreto);
        return numeroSecreto;
    }
    }
//Função para limapr o campo após digitar o número
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute("disabled", "true");
}