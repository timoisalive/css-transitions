function toggleMenu() {
	if(!innerWrap.classList.contains("inner-wrap-open")) {
		innerWrap.classList.remove("inner-wrap-close");
		innerWrap.classList.add("inner-wrap-open");
		navBlock.classList.remove("nav-block-close");
		navBlock.classList.add("nav-block-open");
	} else {
		innerWrap.classList.remove("inner-wrap-open");
		innerWrap.classList.add("inner-wrap-close");
		navBlock.classList.remove("nav-block-open");
		navBlock.classList.add("nav-block-close");
	}
}

var innerWrap = document.querySelector("#inner-wrap");
var navBlock = document.querySelector("#nav-block");
var navOpenBtn = document.querySelector("#nav-open-btn");
var navCloseBtn = document.querySelector("#nav-close-btn");

// Listen to button clicks to toggle menu on/off
navOpenBtn.addEventListener("click", toggleMenu, false);
navCloseBtn.addEventListener("click", toggleMenu, false);

// Close nav by default
navBlock.classList.add("nav-block-close");