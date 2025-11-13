const navToggleButton = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
if (navToggleButton && siteNav) navToggleButton.addEventListener("click", ()=>{
    const isOpen = siteNav.classList.toggle("open");
    navToggleButton.setAttribute("aria-expanded", String(isOpen));
});
document.addEventListener("DOMContentLoaded", ()=>{
    const toTopBtn = document.querySelector(".to-top");
    if (toTopBtn) {
        toTopBtn.style.display = "none";
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 200) toTopBtn.style.display = "block";
            else toTopBtn.style.display = "none";
        });
        toTopBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
const toggleBtn = document.getElementById("navToggle");
const nav = document.getElementById("siteNav");
toggleBtn.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    toggleBtn.classList.toggle("open");
    const expanded = toggleBtn.getAttribute("aria-expanded") === "true" || false;
    toggleBtn.setAttribute("aria-expanded", !expanded);
});
const serviceDropdown = document.querySelector(".services-dropdown");
serviceDropdown.addEventListener("click", ()=>{
    serviceDropdown.classList.toggle("open");
});
// Current year in footer
document.addEventListener("DOMContentLoaded", ()=>{
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

//# sourceMappingURL=Primenumainnovations-haiyagrev.579125c3.js.map
