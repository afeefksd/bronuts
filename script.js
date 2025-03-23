document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("preloader-hidden");
    }, 1500);
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            header.classList.add("sticky-header");
        } else {
            header.classList.remove("sticky-header");
        }
    });
    const cards = document.querySelectorAll(".product-card");

    cards.forEach((card, index) => {
        card.style.opacity = "0"; 
        card.style.transform = "translateY(20px)"; 
        card.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});