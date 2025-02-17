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
function openImage(img) {
    document.getElementById("expandedImg").src = img.src;
    document.getElementById("imgtext").innerHTML = img.alt;
    document.getElementById("imageViewer").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageViewer").style.display = "none";
}

