document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada e script.js funcionando!');

    // Adiciona a funcionalidade ao botão SIM
    const yesButton = document.getElementById('yes');
    const message = document.getElementById('message'); // Seleciona o elemento de mensagem
    if (yesButton) {
        yesButton.addEventListener('click', () => {
            if (message) {
                message.classList.remove('hidden'); // Mostra o texto
                message.classList.add('show'); // Adiciona a classe para exibir o texto
            }
            setTimeout(() => {
                window.location.href = 'Ousado Amor.mp4'; // Substitua pelo URL do seu vídeo
            }, 1000); // Espera 1 segundo antes de redirecionar
        });
    } else {
        console.error('Botão SIM não encontrado');
    }

    // Adiciona a funcionalidade ao botão NÃO
    const noButton = document.getElementById('no');
    if (noButton) {
        noButton.addEventListener('mouseover', () => {
            console.log('Mouseover no botão NÃO');
            // Move o botão NÃO quando o cursor está sobre ele
            const maxOffset = 100; // Máximo deslocamento do botão
            const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
            const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

            noButton.style.position = 'absolute';
            noButton.style.left = `${Math.min(x, window.innerWidth - noButton.offsetWidth)}px`;
            noButton.style.top = `${Math.min(y, window.innerHeight - noButton.offsetHeight)}px`;
        });
    } else {
        console.error('Botão NÃO não encontrado');
    }
});
