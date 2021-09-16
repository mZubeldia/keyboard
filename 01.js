"use strict";

/*
1. creo event listener keydown para localizar el keycode de las letras del teclado
2. localizo si el keycode de la letra pulsada coincide con el keycode de alguna de las pistas de audio
3. localizo el div con el keycode de la letra pulsada
4. añado la clase .playing al div de la letra
*/

const keys = document.querySelectorAll(".key");

function stopTransition(ev) {
  if (ev.propertyName !== "transform") return; // para la función si la transición usada no es transform

  this.classList.remove("playing");
}

function playSound() {
  const visualLetter = document.querySelector(
    `div[data-key="${event.keyCode}"]`
  ); //seleccioa los div que tiene data-keys con su valor asignado

  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // selecciona los audios que tienen data-key con el valor asignado

  audio.currentTime = 0; //permite que el sonido se repita todas las veces que cliquemos sobre la letra del teclado

  if (!audio) return; // para la función si el valor de audio es null - si audio no es true, para

  audio.play();

  addClass(visualLetter);
}

function addClass(visualLetter) {
  visualLetter.classList.add("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", stopTransition)); //añade un listener a todos los elementos con clase key para detectar cuándo empieza una transición sobre

document.addEventListener("keydown", playSound);
