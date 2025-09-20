const createButton = document.getElementById("create-button");
const createdPanel = document.getElementById("created-panel");

createButton.addEventListener("click", () => {
	if (createdPanel.dataset.status === "close") {
		callCreatedPanel("open");
	} else callCreatedPanel("close");
});
document.addEventListener("click", (isClick) => {
	if (!createdPanel.contains(isClick.target) &&
		!createButton.contains(isClick.target)
	) { callCreatedPanel("close"); }
});

function callCreatedPanel(is) {
	const nameInput = document.getElementById("name-input");
	switch (is) {
		case 'open':
			createdPanel.dataset.status = "open";
			createdPanel.classList.replace("hidden", "flex");
			nameInput.focus();
			break;
		default:
			createdPanel.dataset.status = "close";
			createdPanel.classList.replace("flex", "hidden");
			nameInput.blur();
			break;
	}
}

// [< close panel if user click ESC button >]
document.addEventListener("keydown", (isKey) => {
	if (isKey.key === "Escape") { callCreatedPanel("close"); }
});