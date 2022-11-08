var i = 0;
var txt = '\"Welcome to my webpage\"';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tw").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
