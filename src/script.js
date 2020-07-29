var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", function(){
		toggleItem(li);
	});

	var button = document.createElement("button");
	button.addEventListener("click", function(){
		deleteItem(li);
	});
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleItem(elem) {
	elem.classList.toggle("done");
}

li.forEach(function(elem){
	elem.addEventListener("click", function(){
		toggleItem(elem);
	});

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.addEventListener("click", function(){
		deleteItem(elem);
	});
	elem.appendChild(button);
});

function deleteItem(elem) {
	var li_elem = document.querySelectorAll("ul > li");
	for(var i = 0; i < li_elem.length; i++) {
		if(li_elem[i].innerText === elem.innerText) {
			ul.removeChild(ul.children[i]);
		}
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);