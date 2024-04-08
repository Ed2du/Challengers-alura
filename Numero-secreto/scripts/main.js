let Menorvalor = parseInt(prompt('Digite o número minimo'));

let Maiorvalor = parseInt(prompt('Digite o número maximo'));

if (isNaN(Menorvalor) || isNaN(Maiorvalor)) {
    alert('Coloque números validos...');
    window.location.reload();
} 

const NumSecreto = GerarNumeroSecreto();

function GerarNumeroSecreto() {
    return parseInt(Math.random() * Maiorvalor + 1);
}

console.log(NumSecreto);

const MenorvalorTexto = document.querySelector('#menor-valor').innerHTML = Menorvalor;

const MaiorvalorTexto = document.querySelector('#maior-valor').innerHTML = Maiorvalor;
