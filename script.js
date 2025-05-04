const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});