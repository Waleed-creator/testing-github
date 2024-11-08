const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

const navBtn = document.getElementById("nav-btn")
const navBar = document.getElementById("navbar")
const navClose = document.getElementById("nav-close")

// Show nav
navBtn.addEventListener("click", () => {
    navBar.classList.add("showNav");
});

// close nav

navClose.addEventListener("click", () => {
    navBar.classList.remove("showNav");
});

//  Close Navbar When Click 

navBar.addEventListener("click", () => {
    navBar.classList.remove("showNav");
});