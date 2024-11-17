let titulo = document.getElementById("miTitulo")
let innerHTML = document.getElementById.innerHTML("<h1>puedo agregar HTML>")
const hoverAnimation = document.getElementsByClassName("hover-animation");


titulo[0].style.fontSize = '20px';
/*
    getElementsByID
        byClassName
    querySelector, elige el primer elemento que coincide
    querySelectorAll, este funciona solo con los corchetes 

js-animation
*/
/* Si agrego los corchetes, elijo solo un elemento, pero no son obligatorios.*/




function activeTextColor() {
    for (let i = 0; i < hoverAnimation.length; i++) {
        hoverAnimation[i].style.color = '#000';
        hoverAnimation[i].style.fontSize= '1.1em';
        hoverAnimation[i].style.transition = '.5s';
      }
}

function inactiveTextColor() {
    hoverAnimation.style.color = '#2d7f50';
    hoverAnimation.style.fontSize= '1em';
}

