window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let mensagem = document.querySelector('.mensagem');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', (event) => {
    let Audio = event.results[0][0].transcript;

    mensagem.innerHTML = `
    <p>
        Você disse:
    </p>
    <span id="numero-jogador">
        ${Audio}
    </span>
    <p id="texto-dinamico">
        Um pouco maior <i class="fa-solid fa-arrow-up"></i>
    </p>
    `
    Validacao(Audio);
});

document.body.addEventListener('click', e => {
    if (e.target.class = "button") {
        window.location.reload();
    }
})

recognition.addEventListener('end', () => recognition.start());