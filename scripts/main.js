document.addEventListener("DOMContentLoaded", () => {
    loadNavbar();


async function loadNavbar() {
  const response = await fetch("./components/navbar.html");
  const navbarHtml = await response.text();
  document.getElementById("my_navbar").innerHTML = navbarHtml;
}

loadNavbar();
});

function checkDarkMode() {
  const hasDarkMode = window.localStorage.getItem("darkMode");
  if (hasDarkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

checkDarkMode();

function toggleDarkMode() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    window.localStorage.removeItem("darkMode");
  } else {
    document.body.classList.add("dark");
    window.localStorage.setItem("darkMode", "true");
  }
}