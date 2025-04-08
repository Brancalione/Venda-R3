function redirecionarWhatsapp() {
  const numero = '5554984257831'; 
  const mensagem = encodeURIComponent("Olá! Tenho interesse na moto anunciada.");
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, '_blank');
}
// Função para aplicar o zoom
function aplicarZoom(src) {
  const overlay = document.getElementById('zoom-overlay');
  const zoomImg = document.getElementById('zoom-img');
  zoomImg.src = src;
  overlay.style.display = 'flex';
}

// Função para fechar o zoom
function fecharZoom() {
  document.getElementById('zoom-overlay').style.display = 'none';
  document.getElementById('zoom-img').src = '';
}

// Evento para ESC fechar o zoom
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    fecharZoom();
  }
});

// Adiciona evento de clique nas imagens da galeria
document.querySelectorAll('.image-gallery img').forEach(img => {
  img.addEventListener('click', () => aplicarZoom(img.src));
});