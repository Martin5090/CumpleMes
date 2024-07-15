document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('backgroundAudio');

    // Agrega un evento de clic a todo el documento
    document.body.addEventListener('click', () => {
        audio.play().catch(error => {
            console.log('Failed to play audio.', error);
        });
    }, { once: true }); // Elimina el event listener después del primer clic
});