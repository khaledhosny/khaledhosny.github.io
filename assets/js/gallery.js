document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const caption = document.getElementById("image-caption");
  const close = document.getElementById("close-button");
  const prev = document.getElementById("prev-button");
  const next = document.getElementById("next-button");
  const images = document.querySelectorAll("#gallery img");
  let currentIndex = 0;

  function showImage(index) {
    if (index < 0 || index >= images.length) return;

    currentIndex = index;
    const image = images[index];
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    caption.textContent = image.alt;

    // Update navigation button states
    prev.disabled = index === 0;
    next.disabled = index === images.length - 1;
  }

  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      showImage(index);
    });
  });

  // Navigation button event listeners
  next.addEventListener("click", () => showImage(currentIndex + 1));
  prev.addEventListener("click", () => showImage(currentIndex - 1));

  // Close modal when clicking the X
  close.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (event) {
    if (modal.style.display !== "block") return;

    if (event.key === "Escape") modal.style.display = "none";
    else if (event.key === "ArrowRight") showImage(currentIndex + 1);
    else if (event.key === "ArrowLeft") showImage(currentIndex - 1);
  });
});
