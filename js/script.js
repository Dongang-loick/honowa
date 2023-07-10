const liste = document.querySelector('header');
console.log(scrollY);
//changer la couleur de la barre de navigation au scroll de la page

window.addEventListener('scroll', () => {
    if (window.scrollY > 0.5) {
        liste.classList.add('sroll');
    }
    else{
        liste.classList.remove('sroll')
    }
})

//animation du slide
 //element a utiliser
let image = document.querySelectorAll('.image');

let gauche = document.querySelector('.gauche');
let droit = document.querySelector('.droit');

let position = 0;
let nombre = image.length;
 
function invisible() {
    for (let i = 0; i < nombre; i++) {
        image[i].classList.remove('visible');
        
    }
}
 //animaton des boutons
 
gauche.addEventListener('click',() =>{
    position--;
    if (position < 0) {
        position = nombre - 1;
    }
    invisible();
    image[position].classList.add('visible');
});

droit.addEventListener('click',() =>{
    position++;
    if (position >= nombre) {
        position = 0;
    }
    invisible();
    image[position].classList.add('visible');
})
// automatisation du slide
 setInterval(function(){
    position++;
    if (position >= nombre) {
        position = 0;
    }
    invisible();
    image[position].classList.add('visible');
 }, 8000);

 // animation du popup
 let popup = document.querySelector('#popup');
let bouton = document.querySelector('#bouton');

bouton.addEventListener('click', () =>{
    popup.classList.toggle('popup-change')
})

//animation du responsive
let btn = document.querySelector('.menu');
let nav = document.querySelector('nav');

btn.addEventListener('click',() =>{
    nav.classList.toggle('changeMenu');
})
// animation de la nav bar

let list = document.querySelectorAll("nav li");

window.addEventListener('scroll')









