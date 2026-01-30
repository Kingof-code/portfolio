AOS.init({
  duration:1200,
  once:true
});

/* MENU */
const menu = document.getElementById("mobileMenu");
const openBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");

openBtn.onclick = () => menu.classList.add("active");
closeBtn.onclick = () => menu.classList.remove("active");

menu.querySelectorAll("a").forEach(link=>{
  link.onclick = ()=>menu.classList.remove("active");
});

/* DARK MODE */
const toggle = document.getElementById("themeToggle");
toggle.onclick = ()=>{
  document.body.classList.toggle("dark");
  toggle.classList.toggle("fa-sun");
  toggle.classList.toggle("fa-moon");
};

/* PAGE LOADER + SKELETON */
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");      // full screen spinner
  const skeleton = document.getElementById("skeleton-loader"); // skeleton UI
  const mainContent = document.getElementById("main-container"); // real content

  // hide spinner, show skeleton
  loader.style.display = "none";
  skeleton.style.display = "block";

  // simulate loading time
  setTimeout(() => {
    skeleton.style.display = "none";  // hide skeleton
    mainContent.style.display = "block"; // show actual content
  }, 2000); // 2.2 seconds, adjust if needed
});
