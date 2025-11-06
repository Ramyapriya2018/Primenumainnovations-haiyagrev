const navToggleButton = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggleButton && siteNav) {
  navToggleButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
document.addEventListener("DOMContentLoaded", () => {
  const toTopBtn = document.querySelector(".to-top");

  if (toTopBtn) {
    // Hide button initially
    toTopBtn.style.display = "none";

    // Show/hide the button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        toTopBtn.style.display = "block"; // show button
      } else {
        toTopBtn.style.display = "none"; // hide button
      }
    });

    // Smooth scroll to top when clicked
    toTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

const toggleBtn = document.getElementById("navToggle");
const nav = document.getElementById("siteNav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");

  const expanded = toggleBtn.getAttribute("aria-expanded") === "true" || false;
  toggleBtn.setAttribute("aria-expanded", !expanded);
});

const serviceDropdown = document.querySelector(".services-dropdown");
serviceDropdown.addEventListener("click", () => {
  serviceDropdown.classList.toggle("open");
});
