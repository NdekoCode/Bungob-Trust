const humb = document.querySelectorAll(".humberger");
humb.forEach((btn) =>
  btn.addEventListener("click", () => btn.classList.toggle("is-active"))
);
//<!--============================= BUTTON humberger ================= -->

const allBoxes = document.querySelectorAll(".box");
// sideNav
allBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});

/* =========== EXPANDER MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("header-toggle", "nav-menu");

/* =========== ACTIVE AND REMOVE MENU ===============*/
const navLinks = document.querySelectorAll(".nav__link");
// Parcours tout le tableau et enleve la classe active à tous les elements
// Puis rajoute la classe active sur l'element qu'on a cliquer
function linkAction() {
  navLinks.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

navLinks.forEach((n) => n.addEventListener("click", linkAction));

// FOR BTN SEACH

const showIt = (sible, show, event, classAdd) => {
  const toEvent = document.querySelector(sible);
  const toShow = document.querySelector(show);
  toEvent.addEventListener(event, () => {
    toShow.classList.toggle(classAdd);
  });
};
const hiddenIt = (sible, show, event, classAdd) => {
  const toEvent = document.querySelector(sible);
  const toShow = document.querySelector(show);
  toEvent.addEventListener(event, () => {
    toShow.classList.remove(classAdd);
  });
};
// showIt(".search", ".form__search", "click", "active");
showIt(".search", ".form-top", "click", "active");
hiddenIt(".form__dismiss", ".form-top", "click", "active");

let i = 0; // Current Slider
let j = 5; //Total Slider

// Implementaition Active Slide Indicators
let dots = document.querySelectorAll(".dot");
console.log(dots);

let next = document.getElementById("next");
let prev = document.getElementById("prev");
let contents = document.querySelectorAll(".slider-img");
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

dots.forEach((d) =>
  d.addEventListener("click", (d) => {
    dotsIt(d.target);
  })
);
function dotsIt(item) {
  contents.forEach((d) => d.classList.remove("active"));
  document.getElementById("content" + item.dataset.dot).classList.add("active");
  dots.forEach((d) => d.classList.remove("active"));
  document.querySelector(".dot" + item.dataset.dot).classList.add("active");
  // i = item.dataset.dot + 1;
  // indicators(i);
}
// Active the next Element
function nextSlide() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i + 1) % j;
  contents.forEach((d) => d.classList.remove("active"));
  document.getElementById("content" + (i + 1)).style.transition = "1s linear";
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicators(i + 1);
}
// let timer = setInterval(nextSlide, 10000);
// let diapoContainer = document.querySelector(".diapo-container");
// diapoContainer.addEventListener("mouseover", () => {
//   clearInterval(timer);
// });
// diapoContainer.addEventListener("mouseout", () => {
//   setInterval(nextSlide, 10000);
// });
// Active the previous Element
function prevSlide() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i - 1) % j;
  contents.forEach((d) => d.classList.remove("active"));
  document.getElementById("content" + (i + 1)).style.transition = "1s ease-in";
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicators(i + 1);
}

// Implemente l'activation des Dots
function indicators(num) {
  dots.forEach((d) => d.classList.remove("active"));
  console.log(".dot" + num + ")");

  document.querySelector(".dot" + num).classList.add("active");
}

// ================ LE DIASPORAMA AVEC NOUVELLE TECHNO ========================
// Variables globales
// let compter = 0; // Compteur qui permet de connaitre l'image sur laquelle on se trouve
// let timer; // Pour stocker les transitions ie le temps qu'il faut pour faire defiler l'image
// let slides; // Va contenir les slides
// let slideWidth; //La largeur du slide
// let elements;
// let speed;

// On va s'assurer que le DOM est charger
// window.document.addEventListener("DOMContentLoaded", () => {
//   // Dès que le DOM est charger recupere moi les diaporama
//   const diapo = document.querySelector(".diapo");
//   // On recupere le temps de defilement en automatique
//   speed = diapo.dataset.speed;
//   // On recupere le container de nos elements du diasporama
//   elements = document.querySelector(".elements");

//   // On clone la premiere image
//   let firstImage = elements.firstElementChild.cloneNode(true);

//   // On injecte le clone à la fin du Diaspo
//   elements.appendChild(firstImage);

//   // On creer un tableau à partir des enfants du conteneurs des elements
//   slides = Array.from(elements.children);

//   // On recupere la largeur d'un slide
//   slideWidth = diapo.getBoundingClientRect().width;

//   // On recupere les fleches
//   let next = document.getElementById("nav-right");
//   let prev = document.getElementById("nav-left");

//   // On commence par gerer la fleche vers la droite
//   next.addEventListener("click", slideNext);
//   prev.addEventListener("click", slidePrev);

//   // On automatise le defilement
//   timer = setInterval(slideNext, speed);
//   diapo.addEventListener("mouseover", () => clearInterval(timer));
//   diapo.addEventListener(
//     "mouseout",
//     () => (timer = setInterval(slideNext, speed))
//   );
// });

/**
 * Cette fonction fait defiler le disporama vers la droite
 */
// function slideNext() {
//   // On est sur l'image zero alors on va incrementer le compteur pour dire je passe à l'image suivant
//   compter++;
//   // On va recuperer la largeur d'une diaspo(d'un element du slide) et puis on le defile en X
//   let decal = -slideWidth * compter;
//   elements.style.transition = "0.5s linear";
//   elements.style.transform = `scale(1.2) translateX(${decal}px)`;

//   // On attend la fin de la transition et on "rembombine" ie on recommence de facon cacher
//   setTimeout(() => {
//     if (compter >= slides.length - 1) {
//       compter = 0;
//       // On enleve la transition
//       elements.style.transition = "unset";
//       elements.style.transform = "translateX(0)";
//       // elements.classList.remove("zoom");
//     }
//   }, 1000);
// }

/**
 * Permet de faire defiler le slide vers la gauche
 */
// function slidePrev() {
//   // Si le compteur est superieur a zero alors on diminue le compteur
//   compter--;
//   elements.style.transition = "0.5s linear";
//   // Avant de faire le decalage on va verifier si on est à la premiere image
//   if (compter < 0) {
//     // Si oui alors on remet le compteur à la derniere diapo
//     compter = slides.length - 1;
//     let decal = -slideWidth * compter;
//     elements.style.transition = "unset";
//     elements.style.transform = `translateX(${decal}px)`;
//     console.log(`translateX(${decal}px)`);
//     setTimeout(slidePrev, 1);
//   }
//   let decal = -slideWidth * compter;
//   elements.style.transform = `translateX(${decal}px)`;
// }
