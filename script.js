document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada e script.js funcionando!');

    // Adiciona a funcionalidade ao botão SIM
    document.getElementById('yes').addEventListener('click', () => {
        window.location.href = 'URL_DO_SEU_VIDEO'; // Substitua pelo URL do seu vídeo
    });

    // Adiciona a funcionalidade ao botão NÃO
    const noButton = document.getElementById('no');

    noButton.addEventListener('mouseover', () => {
        // Move o botão NÃO quando o cursor está sobre ele
        const maxOffset = 100; // Máximo deslocamento do botão
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

        noButton.style.position = 'absolute';
        noButton.style.left = `${Math.min(x, window.innerWidth - noButton.offsetWidth)}px`;
        noButton.style.top = `${Math.min(y, window.innerHeight - noButton.offsetHeight)}px`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada e script.js funcionando!');
});