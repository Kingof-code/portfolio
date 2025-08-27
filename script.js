//For toggle Menu
function toggleMenu() {
    const navbar = document.getElementById("mobileMenu");
    if (navbar.style.transform === "translateY(0px)") {
        navbar.style.transform = "translateY(-500px)";
    } else {
        navbar.style.transform = "translateY(0px)";
    }
}

// For Close the menu when clicking outside
document.addEventListener("click", function(event) {
    const menu = document.getElementById("mobileMenu");
    const menuButton = document.querySelector(".hamburg");

    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.style.transform = "translateY(-500px)";
    }
});

// For Preloader
// Wait until page fully loads
window.addEventListener("load", function() {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none"; // Hide preloader
    document.querySelector(".content").style.display = "block"; // Show content
});