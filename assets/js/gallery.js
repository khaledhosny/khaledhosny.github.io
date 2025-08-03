document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const caption = document.getElementById("image-caption");
  const closeBtn = document.getElementsByClassName("close")[0];
  const galleryImages = document.querySelectorAll("#gallery img");

  galleryImages.forEach((image) => {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImage.src = this.src;
      modalImage.alt = this.alt;
      caption.textContent = this.alt;
    });
  });

  // Close modal when clicking the X
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
});
