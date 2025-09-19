const openNavButton = document.getElementById("open-nav-button");
const closeNavButton = document.getElementById("close-nav-button");
const navMobile = document.getElementById("nav-mobile");

openNavButton.addEventListener("click", () => {
	if (navMobile.dataset.status === "close") {
		callNav("open");
	} else callNav("close");
});

//  [< close script >]
document.addEventListener("click", function(isClick) {
	if (
		!navMobile.contains(isClick.target) &&
		!openNavButton.contains(isClick.target)
	) callNav("close");
});
document.addEventListener("keydown", (isKey) => {
	if (isKey.key === "Escape") callNav("close");
});

function callNav(is) {
	switch (is) {
		case "open":
				navMobile.dataset.status = "open";
				navMobile.classList.replace("left-[-200%]", "left-0");
				break;
		default:
			navMobile.dataset.status = "close";
			navMobile.classList.replace("left-0", "left-[-200%]");
			break;
	}
}