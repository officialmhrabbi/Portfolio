
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const projectToggles = document.querySelectorAll(".project-toggle");

projectToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const extra = btn.parentElement.querySelector(".project-extra");
    if (!extra) return;

    const isHidden = extra.classList.toggle("is-hidden");
    btn.textContent = isHidden ? "Read more" : "Show less";
  });
});

const yearSpan = document.querySelector("#year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.classList.add("is-pressed");
  });

  btn.addEventListener("mouseup", () => {
    btn.classList.remove("is-pressed");
  });

  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("is-pressed");
  });
});
