let stack = [];
let undoStack = [];
let redoStack = [];

const todoWrapper = document.getElementById("todo-wrapper");

function renderTask(data = stack) {
	todoWrapper.innerHTML = null;

	stack.forEach((item, index) => {
		const fragment = document.createDocumentFragment();

		
	});
}