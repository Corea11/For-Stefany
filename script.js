document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('envelopeWrapper');
  const bgElements = document.getElementById('bgElements');
  const bgPhotos = document.getElementById('bgPhotos');

  // Abrir / Cerrar la carta
  if (wrapper) {
    wrapper.addEventListener('click', () => {
      wrapper.classList.toggle('open');
    });
  }

  // ========================================================
  // 📸 MIS FOTOS
  // ========================================================
  const myPhotos = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    'foto4.jpg',
    'foto5.jpg'
  ];

  function createFloatingPhoto() {
    if (!bgPhotos || myPhotos.length === 0) return;

    const img = document.createElement('img');
    img.classList.add('floating-photo');
    
    // Elige una foto al azar
    const randomPhoto = myPhotos[Math.floor(Math.random() * myPhotos.length)];
    img.src = randomPhoto;

    // Posición horizontal (entre 10% y 85%)
    img.style.left = `${Math.random() * 75 + 10}%`;

    // Duración de animación (lenta para apreciar las fotos)
    const duration = Math.random() * 4 + 8;
    img.style.animationDuration = `${duration}s`;

    bgPhotos.appendChild(img);

    // Se elimina sola al terminar de subir
    setTimeout(() => {
      img.remove();
    }, duration * 1000);
  }

  // Lanza una foto de inmediato y luego genera una cada 3 segundos
  createFloatingPhoto();
  setInterval(createFloatingPhoto, 3000);

  // ========================================================
  // 🌸 FLORES Y CORAZONES FLOTANTES
  // ========================================================
  const items = ['🌸', '🌺', '🌹', '❤️', '✨', '💖', '🌼', '🍃', '💕'];

  function createFloatingItem() {
    if (!bgElements) return;

    const item = document.createElement('div');
    item.classList.add('floating-item');
    item.textContent = items[Math.floor(Math.random() * items.length)];
    item.style.fontSize = `${Math.random() * 18 + 14}px`;
    item.style.left = `${Math.random() * 100}%`;
    
    const duration = Math.random() * 5 + 5;
    item.style.animationDuration = `${duration}s`;

    bgElements.appendChild(item);

    setTimeout(() => {
      item.remove();
    }, duration * 1000);
  }

  // Genera un elemento flotante cada 350ms
  setInterval(createFloatingItem, 350);
});