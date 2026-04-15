document.addEventListener("DOMContentLoaded", () => {

  const lightbox = document.getElementById("lightbox");

  if (!lightbox) return;

  const images = document.querySelectorAll(".gallery-item img");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  if (closeBtn) {
    closeBtn.onclick = () => lightbox.style.display = "none";
  }

  lightbox.onclick = (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  };

});