// Torna a navbar transparente ao descer o scroll
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("fade", window.scrollY > 0);
  });
});

// Link do Whatsapp
function enviarWhatsapp() {
  var numeroTelefone = "558188433838";
  var mensagem =
    "Olá, estou entrando em contato através do site. Desejo saber mais sobre a matrícula no curso.";
  var linkWhatsapp =
    "https://wa.me/" + numeroTelefone + "?text=" + encodeURIComponent(mensagem);
  window.open(linkWhatsapp, "_blank");
}
