// creo le 2 variabili
// seleziono la classe "fa-bars" ed al click
// aggiungi la classe active che è diplay block
const openHamburger = document.querySelector('.fa-bars');
const hamburger = document.querySelector('.hamburger-menu');

openHamburger.addEventListener('click', function(){
    hamburger.classList.add("active"); 
})

// per tornare alla precedente schermata prima del click
// creo una variabile che al click del "fa-times" riporti indietro l'utente
const closeHamburger = document.querySelector(".fa-times");

closeHamburger.addEventListener("click", function(){
    hamburger.classList.remove("active");
})