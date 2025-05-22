  // Responsive navbar toggle
    document.getElementById('mobile-menu').addEventListener('click', () => {
      document.querySelector('.nav-list').classList.toggle('active');
    });
// using a pre loader 

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  // Fade out effect
  preloader.style.transition = "opacity 0.5s ease";
  preloader.style.opacity = 0;

  setTimeout(() => {
    preloader.style.display = "none";
    mainContent.style.display = "block";
  }, 500);
});
