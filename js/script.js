/* ============================================
   Portfolio — Main Script
   ============================================ */

// ---------- Mobile Navigation ----------
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// Close mobile nav on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// ---------- Active Link on Scroll ----------
const sections = document.querySelectorAll("section");

function updateActiveLink() {
  const scrollY = window.scrollY + 200;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `.navbar a[href="#${id}"]`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// ---------- Header Background on Scroll ----------
const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.borderBottomColor = "rgba(255, 255, 255, 0.08)";
  } else {
    header.style.borderBottomColor = "rgba(255, 255, 255, 0.06)";
  }
});

// ---------- Scroll Reveal Animation ----------
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  // Add fade-in class and observe elements
  const animateSelectors = [
    ".hero-content",
    ".hero-visual",
    ".section-header",
    ".about-image",
    ".about-text",
    ".skill-card",
    ".project-card",
    ".contact-info",
    ".contact-form",
    ".stat-item",
  ];

  animateSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.classList.add("fade-in");
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });
  });
}

initScrollReveal();

// ---------- Typed.js ----------
if (typeof Typed !== "undefined") {
  new Typed(".typed-text", {
    strings: [
      "Flutter Developer",
      "Mobile App Engineer",
      "UI/UX Enthusiast",
      "Freelancer",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    showCursor: false,
  });
}

// ---------- Cursor Blink Sync ----------
// Hide custom cursor when typed.js is active
const cursorEl = document.querySelector(".cursor");
if (cursorEl) {
  const typedEl = document.querySelector(".typed-text");
  const checkTyped = () => {
    if (typedEl && typedEl.textContent.length > 0) {
      cursorEl.style.display = "inline";
    }
  };
  setInterval(checkTyped, 500);
}
