document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu when clicking a link (for better mobile UX)
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }
});
// Navigation Toggle
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// Tab Gallery Functionality
function changeImage(img) {
    document.getElementById("displayedImage").src = img.src;
}
