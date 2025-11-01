//script . js file
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
