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
window.addEventListener("load", () => {
  const pageLoader = document.getElementById("page-loader");
  const skeleton = document.getElementById("skeleton-loader");
  const content = document.getElementById("main-content");

  // Step 1: Hide full loader
  pageLoader.style.display = "none";

  // Step 2: Show skeleton
  skeleton.style.display = "block";

  // Step 3: After skeleton delay, show content
  setTimeout(() => {
    skeleton.style.display = "none";
    content.style.display = "block";
    AOS.refresh();
  }, 1800); // professional delay
});


AOS.init({
        duration: 1000,
        offset: 0,
        once: true,
        anchorPlacement: 'bottom-bottom'
    });
