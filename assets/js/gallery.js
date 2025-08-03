document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const caption = document.getElementById("image-caption");
  const closeButton = document.getElementById("close-button");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const galleryImages = document.querySelectorAll("#gallery img");
  let currentImageIndex = 0;

  function showImage(index) {
    currentImageIndex = index;
    const image = galleryImages[index];
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    caption.textContent = image.alt;

    // Update navigation button states
    prevButton.disabled = index === 0;
    nextButton.disabled = index === galleryImages.length - 1;
  }

  function showNextImage() {
    if (currentImageIndex < galleryImages.length - 1) {
      showImage(currentImageIndex + 1);
    }
  }

  function showPrevImage() {
    if (currentImageIndex > 0) {
      showImage(currentImageIndex - 1);
    }
  }

  galleryImages.forEach((image, index) => {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      showImage(index);
    });
  });

  // Navigation button event listeners
  nextButton.addEventListener("click", showNextImage);
  prevButton.addEventListener("click", showPrevImage);

  // Close modal when clicking the X
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal with Escape key and handle arrow keys for navigation
  document.addEventListener("keydown", function (event) {
    if (modal.style.display === "block") {
      if (event.key === "Escape") {
        modal.style.display = "none";
      } else if (event.key === "ArrowRight") {
        showNextImage();
      } else if (event.key === "ArrowLeft") {
        showPrevImage();
      }
    }
  });
});
