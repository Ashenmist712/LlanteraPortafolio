
const visorPdf = document.getElementById('pdfViewer');
const modalElemento = document.getElementById('pdfModal');

function verPDF(nombreArchivo) {

    const rutaFinal = "docs/" + nombreArchivo;

    console.log("Intentando abrir el archivo en: " + rutaFinal);
    visorPdf.src = rutaFinal;
    const miModal = new bootstrap.Modal(modalElemento);
    miModal.show();
}

modalElemento.addEventListener('hidden.bs.modal', function () {
    visorPdf.src = "";
    console.log("Visor cerrado y memoria liberada.");
});
