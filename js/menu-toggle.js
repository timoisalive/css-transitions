function toggleMenu() {
	if(!innerWrap.classList.contains("inner-wrap-open")) {
		innerWrap.classList.remove("inner-wrap-close");
		innerWrap.classList.add("inner-wrap-open");
		arrow.classList.remove("arrow-close");
		arrow.classList.add("arrow-open");
		navBlock.classList.remove("nav-block-close");
		navBlock.classList.add("nav-block-open");
	} else {
		innerWrap.classList.remove("inner-wrap-open");
		innerWrap.classList.add("inner-wrap-close");
		arrow.classList.remove("arrow-open");
		arrow.classList.add("arrow-close");
		navBlock.classList.remove("nav-block-open");
		navBlock.classList.add("nav-block-close");
	}
}

var innerWrap = document.querySelector("#inner-wrap");
var arrow = document.querySelector("#arrow");
var navBlock = document.querySelector("#nav-block");
var navOpenBtn = document.querySelector("#nav-open-btn");
var navCloseBtn = document.querySelector("#nav-close-btn");

// Add default transition props to all animated elements
innerWrap.classList.add("transition");
arrow.classList.add("transition");
navBlock.classList.add("transition");

// Listen to button clicks to toggle menu on/off
navOpenBtn.addEventListener("click", toggleMenu, false);
navCloseBtn.addEventListener("click", toggleMenu, false);

// Close nav by default
navBlock.classList.add("nav-block-close");