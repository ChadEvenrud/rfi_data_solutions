// Element Variables

const nav = document.getElementById("nav");
const navMenu = document.getElementsByClassName("nav_menu")[0];

// Functions

const showNavList = () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
};

// Event Listeners

navMenu.addEventListener("click", showNavList);
