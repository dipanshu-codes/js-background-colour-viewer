const body = document.getElementsByTagName("body")[0];

document.getElementById("red").onclick = redBackground;
document.getElementById("black").onclick = blackBackground;
document.getElementById("blue").onclick = blueBackground;
document.getElementById("purple").onclick = purpleBackground;
document.getElementById("yellow").onclick = yellowBackground;

function redBackground() {
  console.log("Running function to change background colour to red");
  body.style.backgroundColor = "red";
  body.style.color = "white";
  console.log("Finished executing");
}

function blackBackground() {
  console.log("Running function to change background colour to black");
  body.style.backgroundColor = "black";
  body.style.color = "white";
  console.log("Finished executing");
}

function blueBackground() {
  console.log("Running function to change background colour to blue");
  body.style.backgroundColor = "blue";
  body.style.color = "white";
  console.log("Finished executing");
}

function purpleBackground() {
  console.log("Running function to change background colour to purple");
  body.style.backgroundColor = "purple";
  body.style.color = "white";
  console.log("Finished executing");
}

function yellowBackground() {
  console.log("Running function to change background colour to yellow");
  body.style.backgroundColor = "yellow";
  body.style.color = "white";
  console.log("Finished executing");
}
