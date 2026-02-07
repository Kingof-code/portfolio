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

const accentIcon = document.getElementById("accentIcon");
const buttonIcon = document.getElementById("buttonIcon");

const accentColors = document.getElementById("accentColors");
const buttonColors = document.getElementById("buttonColors");

/* toggle lists */
accentIcon.addEventListener("click", e => {
  e.stopPropagation();
  accentColors.classList.toggle("active");
  buttonColors.classList.remove("active");
});

buttonIcon.addEventListener("click", e => {
  e.stopPropagation();
  buttonColors.classList.toggle("active");
  accentColors.classList.remove("active");
});

/* apply colors */
document.querySelectorAll("#accentColors span").forEach(c => {
  c.style.background = c.dataset.color;
  c.addEventListener("click", e => {
    e.stopPropagation();
    applyTheme("--accent", c.dataset.color);
    accentColors.classList.remove("active"); // ✅ hide list
  });
});

document.querySelectorAll("#buttonColors span").forEach(c => {
  c.style.background = c.dataset.color;
  c.addEventListener("click", e => {
    e.stopPropagation();
    applyTheme("--button", c.dataset.color);
    buttonColors.classList.remove("active"); // ✅ hide list
  });
});

/* click outside closes everything */
document.addEventListener("click", () => {
  accentColors.classList.remove("active");
  buttonColors.classList.remove("active");
});

/* theme apply + loader */
function applyTheme(variable, color) {
  document.documentElement.style.setProperty(variable, color);

  const loader = document.getElementById("page-loader");
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
  }, 800);
}

/*remove right click*/
document.addEventListener("contextmenu", function (e) {
  const allowed = e.target.closest("input, textarea");
  if (!allowed) {
    e.preventDefault();
  }
});

const form = document.getElementById("contactForm");
const notify = document.getElementById("notify");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload stop

  fetch("https://sathishkumar6381306372.getform.com/4z3p7", {
    method: "POST",
    body: new FormData(form)
  })
  .then(() => {
    // show notification
    notify.classList.add("show");

    // clear form
    form.reset();

    // hide notification after 3 sec
    setTimeout(() => {
      notify.classList.remove("show");
    }, 3000);
  })
  .catch(() => {
    alert("Something went wrong ❌");
  });
});
