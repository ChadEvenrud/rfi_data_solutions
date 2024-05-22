// Element Variables

const nav = document.getElementById("nav");
const navMenu = document.getElementsByClassName("menu-icon")[0];
const themeSwitcher = document.getElementById("theme-switcher");

// Functions

// Navigation Functions
const toggleNavMenu = () => {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
  } else {
    navMenu.classList.add("active");
  }
};

const hideNav = () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    navMenu.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
};

// Dark and Light Theme Functions

function darkMode() {
  themeSwitcher.children[0].textContent = "Dark Mode";
  themeSwitcher.children[1].classList.replace("fa-sun", "fa-moon");
}

function lightMode() {
  themeSwitcher.children[0].textContent = "Light Mode";
  themeSwitcher.children[1].classList.replace("fa-moon", "fa-sun");
}

// Switch Theme
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (!currentTheme || currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}
// Event Listeners

navMenu.addEventListener("click", toggleNavMenu);
navMenu.addEventListener("click", hideNav);
themeSwitcher.addEventListener("click", switchTheme);

// Check Local Storage For Theme
const currentThemeFromLocalStorage = localStorage.getItem("theme");
if (currentThemeFromLocalStorage) {
  document.documentElement.setAttribute(
    "data-theme",
    currentThemeFromLocalStorage
  );
  if (currentThemeFromLocalStorage === "dark") {
    darkMode();
  } else {
    lightMode();
  }
}

// Scroll Menu

const scrollMenu = () => {
  const menuIcon = document.getElementById("logo_scroll");
  let scrollPosition = window.scrollY;
  console.log(scrollPosition);

  if (scrollPosition > 444) {
    menuIcon.classList.add("scrolled");
  } else {
    menuIcon.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", scrollMenu);
