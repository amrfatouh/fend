/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll("section");
let navList = document.querySelector("#navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let liFragment = document.createDocumentFragment();
sections.forEach((sec) => {
  let li = document.createElement("li");
  li.className = "menu__link";
  li.textContent = sec.querySelector("h2").textContent;
  liFragment.appendChild(li);
});
navList.appendChild(liFragment);

// Add class 'active' to section when near top of viewport
function addActiveNearTop() {
  sections.forEach((sec) => {
    secBounds = sec.getBoundingClientRect();
    if (secBounds.top <= 200 && secBounds.top >= 0) {
      sections.forEach((sec) => sec.classList.remove("active"));
      sec.classList.add("active");
    }
  });
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
document.addEventListener("scroll", addActiveNearTop);
