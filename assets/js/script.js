
$(document).ready(function() {
  $.scrollify({
    section: ".section", // Seletor de seções que serão roladas
    easing: "easeOutExpo", // Tipo de animação
    scrollSpeed: 1100, // Velocidade da rolagem
    offset: 0, // Deslocamento
    scrollbars: false, // Se true, a barra de rolagem será visível
    interstitialSection: "", // Seções intersticiais, se houver
  });
});