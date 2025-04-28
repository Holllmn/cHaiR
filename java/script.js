function abrirModal(src) {
    let modal = document.getElementById("modal");
    let imagenModal = document.getElementById("imagenModal");

    imagenModal.src = src;
    modal.style.display = "flex";
}

function cerrarModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        cerrarModal();
    }
};