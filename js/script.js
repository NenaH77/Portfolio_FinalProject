document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const cards = document.querySelectorAll(".card");

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;

    function showImage(index) {
        const img = cards[index].querySelector("img");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    }

    cards.forEach((card, index) => {
        card.addEventListener("click", function () {
            currentIndex = index;
            showImage(currentIndex);
            lightbox.style.display = "flex";
        });
    });

    nextBtn.addEventListener("click", function (e) {
        e.stopPropagation();

        currentIndex++;

        if (currentIndex >= cards.length) {
            lightbox.style.display = "none";
            return;
        }

        showImage(currentIndex);
    });

    prevBtn.addEventListener("click", function (e) {
        e.stopPropagation();

        currentIndex--;

        if (currentIndex < 0) {
            lightbox.style.display = "none";
            return;
        }

        showImage(currentIndex);
    });

    lightboxImg.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
});

const carouselImages = [
    "images/GroceryApp.png",
    "images/NewRoots.png"
];

const carouselImage = document.querySelector(".carousel-image");
const prevSlide = document.querySelector(".prev-slide");
const nextSlide = document.querySelector(".next-slide");

let slideIndex = 0;

if (carouselImage && prevSlide && nextSlide) {
    nextSlide.addEventListener("click", function () {
        slideIndex++;

        if (slideIndex >= carouselImages.length) {
            slideIndex = 0;
        }

        carouselImage.src = carouselImages[slideIndex];
    });

    prevSlide.addEventListener("click", function () {
        slideIndex--;

        if (slideIndex < 0) {
            slideIndex = carouselImages.length - 1;
        }

        carouselImage.src = carouselImages[slideIndex];
    });
}
