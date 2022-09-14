let jeux = [];
let choix = ["pierre", "feuille", "ciseaux"];
let nombreChoix = choix.length;
let aleatoire = Math.floor(Math.random() * nombreChoix);
titre = document.getElementById("titre");



window.addEventListener('load', (event) => {
    initialisation();
});
document.getElementById("rejouer").addEventListener('click', (event) => {
    initialisation();
});


document.getElementById("play1").addEventListener('click', (event) => {
    let choixAleatoire = chifoumi();
    play1.style.pointerEvents = 'none';
    document.getElementById("rejouer").style.display = "none";
    document.getElementById("zone1").src = "images/"+choixAleatoire+".png";
    jeux.push(choixAleatoire);
    if (jeux.length ===2) {
        checkWin();
    }

});


document.getElementById("play2").addEventListener('click', (event) => {
    let choixAleatoire = chifoumi();
    play2.style.pointerEvents = 'none';
    document.getElementById("rejouer").style.display = "none";
    document.getElementById("zone2").src = "images/"+choixAleatoire+".png";
    jeux.push(choixAleatoire);
    if (jeux.length ===2) {
        checkWin();
    }
});

function initialisation() {
    document.getElementById("rejouer").style.display = "none";

    titre.innerHTML = "CHI/FOU/MI";
    document.getElementById("zone1").src = "images/chifou.png";
    document.getElementById("zone2").src = "images/chifou.png";
    jeux = [];
    play1.style.pointerEvents = 'auto';
    play2.style.pointerEvents = 'auto';
}


function chifoumi () {
    let aleatoire = Math.floor(Math.random() * nombreChoix);
   return choix[aleatoire];
}

function checkWin() {
    if (jeux[0] === jeux[1]){
        titre.innerHTML="Vous êtes à égalité!";
    }
    else if (jeux[0] === "ciseaux" && jeux[1] === "pierre"){
        titre.innerHTML="le ciseaux se fait défoncer par la pierre ";
    }
    else if (jeux[0] === "ciseaux" && jeux[1] === "feuille"){
        titre.innerHTML="Le ciseaux coupe la feuille";
    }
    else if (jeux[0] === "feuille" && jeux[1] === "ciseaux"){
        titre.innerHTML="La feuille se fait couper par le ciseaux";
    }
    else if (jeux[0] === "feuille" && jeux[1] === "pierre"){
        titre.innerHTML="La feuille englobe la pierre";
    }
    else if (jeux[0] === "pierre" && jeux[1] === "feuille"){
        titre.innerHTML="La pierre se fait englober par la feuille";
    }
    else if (jeux[0] === "pierre" && jeux[1] === "ciseaux"){
        titre.innerHTML="La pierre défonce le ciseaux";
    }
    document.getElementById("rejouer").style.display = "initial";
}










