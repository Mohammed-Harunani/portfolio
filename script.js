// Dark / Light theme toggle
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.dataset.theme;
    document.body.dataset.theme = currentTheme === "dark" ? "light" : "dark";
  });
}

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
