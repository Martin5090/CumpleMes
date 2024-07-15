// Pausar videos cuando se cambia de diapositiva en el carrusel
$('#videoCarousel').on('slide.bs.carousel', function () {
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.pause();
        var button = video.nextElementSibling;
        button.style.display = 'block'; // Asegura que los botones de reproducción estén visibles al cambiar de diapositiva
    });
});

// Función playPause para el botón de reproducción
function playPause(videoId) {
    var video = document.getElementById(videoId);
    var button = video.nextElementSibling;

    if (video.paused) {
        video.play();
        button.style.display = 'none'; // Oculta el botón de reproducción cuando se inicia la reproducción
    } else {
        video.pause();
        button.style.display = 'block'; // Muestra el botón de reproducción cuando se pausa la reproducción
    }

    // Mostrar el botón de reproducción al finalizar el video
    video.onended = function() {
        button.style.display = 'block';
    };
}
function mostrarError(mensaje) {
    alert(mensaje);
}
document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('backgroundAudio');

    // Monitorear el progreso de reproducción
    audio.addEventListener("timeupdate", function() {
        if (audio.currentTime >= audio.duration - 0.5) {
            audio.currentTime = 0; // Reiniciar al inicio
        }
    });

    // Agrega un evento de clic a todo el documento
    document.body.addEventListener('click', () => {
        audio.play().catch(error => {
            console.log('Failed to play audio.', error);
        });
    }, { once: true }); // Elimina el event listener después del primer clic
});
