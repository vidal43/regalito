function showClue() {
    // Mostrar el modal con la pista
    var modal = document.getElementById("clueModal");
    modal.style.display = "flex";

    // Reproducir el sonido de celebración desde el <audio>
    var audio = document.getElementById("celebrationSound");
    audio.play();

    // Lanzar confeti
    confetti();
}

function closeClue() {
    // Cerrar el modal cuando se haga clic en el botón de cerrar
    var modal = document.getElementById("clueModal");
    modal.style.display = "none";
}
