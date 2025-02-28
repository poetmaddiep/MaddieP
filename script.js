document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) { // Prevents errors if elements don't exist
        menuToggle.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior
            navLinks.classList.toggle("active"); // Show/hide menu
        });

        // Close menu when a link is clicked (for better UX)
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active"); // Hide menu after selection
            });
        });

        // Ensure tap works on mobile
        menuToggle.addEventListener("touchstart", function (event) {
            event.preventDefault();
            navLinks.classList.toggle("active");
        });
    }
});
