document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario por defecto

    var date = document.getElementById("date").value;

    // Aquí se debe comparar la fecha con la fecha correcta
    var correctDate = "2023-04-14"; // Reemplaza con la fecha correcta en formato ISO (AAAA-MM-DD)

    if (date === correctDate) {
        alert("¡Fecha correcta! Redirigiendo a la página 'carta.html'...");
        window.location.href = "carta.html"; // Redirigir al usuario a 'carta.html'
    } else {
        document.getElementById("error-msg").innerText = "Como te equivocaste pipipipipi😭"; // Mostrar mensaje de error
    }
});
