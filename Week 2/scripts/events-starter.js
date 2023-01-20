function clickLink(e) {
	alert("I'm going to take you to " + e.target.innerHTML);
}

function focusButton(e) {
	e.target.style.backgroundColor = "#ffc8dd";
}

function leaveButton(e) {
    e.target.style.backgroundColor = "#a3b18a";
}



let list = document.getElementsByTagName('ul')[0];

let lastItem = document.createElement('li');
let lastLink = document.createElement('a');
lastLink.innerHTML = "Durham College";
lastLink.href = "https://durhamcollege.ca/";
lastItem.appendChild(lastLink);
list.appendChild(lastItem);

let anchors = document.getElementsByTagName('a');
for (let i = 0; i < anchors.length; i++) {
    anchor = anchors[i];
    anchor.addEventListener('click', clickLink, false);
}

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    button = buttons[i];
    button.addEventListener('mouseover', focusButton, false);
    button.addEventListener('mouseout', leaveButton, false);
}

let firstItem = document.getElementsByTagName('li')[0];
let firstItemLink = firstItem.firstChild.nextSibling;
// console.log(firstItemLink);
firstItemLink.href = "https://google.com"

let secondItem = document.getElementsByTagName('li')[1];
let secondItemLink = secondItem.firstChild.nextSibling;
secondItemLink.href = "https://www.w3schools.com/"

