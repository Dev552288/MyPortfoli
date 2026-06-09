
// =========================
// TYPING EFFECT
// =========================
const text = "Full Stack Developer | Android | Flutter | Java";
let index = 0;

function typeEffect() {
  const target = document.getElementById("typing");

  if (!target) return;

  target.innerHTML = text.slice(0, index);
  index++;

  if (index > text.length) index = 0;

  setTimeout(typeEffect, 120);
}

typeEffect();


// =========================
// SCROLL REVEAL
// =========================
const revealElements = document.querySelectorAll(".card, .skill, .section-title");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "0.6s ease-out";
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  observer.observe(el);
});


// =========================
// ACTIVE NAV LINK HIGHLIGHT
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


// =========================
// SMOOTH NAV CLICK (optional enhancement)
// =========================
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});