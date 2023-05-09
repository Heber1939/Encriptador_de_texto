function copiar(){
var botonCopiar = document.querySelector(".btn-Copiar");

botonCopiar.addEventListener("click", function(event) {
    event.preventDefault();
    var copiarTexto = document.querySelector(".Mensaje");
    copiarTexto.select(".Mensaje");
    document.execCommand("copy");
    alert("Texto copiado en el portapapeles.");
});
}