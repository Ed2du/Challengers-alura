
function Validacao(Audio) {
    let MensagemDinamica = document.querySelector('#texto-dinamico');

    const numero =+ Audio;

    if (NumeroSimOuNao(numero)) {
        alert('Número Invalido...')
        MensagemDinamica.textContent = `Número Invalido.`
    }

    if (ValidacaoDeLimite(numero)) {
        alert(`O número precisa estar dentro do limite de ${Menorvalor} e ${Maiorvalor}`);
        MensagemDinamica.textContent = `Número Invalido`
    }

    if (numero ===  NumSecreto) {
        const h1 = document.createElement('h1');
        h1.textContent = `PARABENS, VOCÊ ACERTOU!`;
        h1.setAttribute('class', 'h1-finish')
        const h2 = document.createElement('h2');
        h2.setAttribute('class', 'h2-finish');
        h2.textContent = `${numero}`;
        const button = document.createElement('button');
        button.setAttribute('class', 'button-finish');
        button.textContent = `Denovo?`
        const div = document.createElement('div');


        div.setAttribute('class', 'div-finish');


        div.append(h1)
        div.append(h2)
        div.append(button)

        document.body.innerHTML = div.outerHTML;
        return;
    }
    else if (numero < NumSecreto) {
        MensagemDinamica.innerHTML = `
        Um pouco maior <i class="fa-solid fa-arrow-up"></i>
        `
    }
    else if (numero > NumSecreto) {
        MensagemDinamica.innerHTML = `
        Um pouco menor <i class="fa-solid fa-arrow-down"></i>
        `
    }
}

function NumeroSimOuNao(numero) {
    return Number.isNaN(numero);
}

function ValidacaoDeLimite(numero) {
    return numero > Maiorvalor || numero < Menorvalor;
}
