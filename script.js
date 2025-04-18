// Initialisation de AOS
AOS.init();

// Sélection du bouton de changement de thème
const toggleBtn = document.getElementById('themeToggle');

// Vérifie et applique le thème sauvegardé lors du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  // Lancer la vidéo automatiquement dès que la page est chargée
  const video = document.querySelector('video');
  if (video) {
    // Ajouter l'attribut 'muted' pour permettre l'autoplay
    video.muted = true;
    video.play();
  }
});

// Écouteur d'événement pour changer le thème
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // Mise à jour du thème dans le localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
