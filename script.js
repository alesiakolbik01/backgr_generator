var css = document.getElementById("css-gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnCopy = document.getElementById("btn-copy");
var btnRndGenerate = document.getElementById("btn-rnd-generate");

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.value = body.style.background + ";";
}

function clearSelection()
{
	if (window.getSelection) {window.getSelection().removeAllRanges();}
	else if (document.selection) {document.selection.empty();}
}

function handleClickCopy()
{
	// Select the text field
	css.select();
	css.setSelectionRange(0, 99999); // For mobile devices
	// Copy the text inside the text field
	navigator.clipboard.writeText(css.value);
	setTimeout(clearSelection, 100);
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


function generateRandomGradient()
{
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

document.addEventListener('DOMContentLoaded', setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btnCopy.addEventListener("click", handleClickCopy);
btnRndGenerate.addEventListener("click", generateRandomGradient);
