const toggleMenu = document.querySelector(".icon_hamburger");
const navLinks = document.querySelector(".nav_links");

toggleMenu.addEventListener("click", () => {
	navLinks.classList.toggle("active");
})