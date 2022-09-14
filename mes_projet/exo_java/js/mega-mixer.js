let flipper = document.getElementById("flipper");
let tableauNomPrenom = ["Baca Steven", "Ozdemir Gunay", "Aracena Bryan", "Kebiri Kamel", "Khaffane Hicham", "Cherni Anisse", "Yangbo Matthieu", "Marel Julien","Gérome"];
let taillecarte = document.getElementById("taillecarte");
let start = document.getElementById('reinitialiser');

document.getElementById("carte").addEventListener("change", function (event) {
    taillecarte.style.width = event.target.value + "px";
});

document.getElementById("reinitialiser").addEventListener('click', (event) => {
    rejouer();
});
window.addEventListener('load', (event) => {
// construction des cartes html
    for (let i = 0; i < tableauNomPrenom.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'flipcard h');
        div.id = "card" + (i+1);

        div.innerHTML = `<div class=" front start imagefront ">
        </div>
            <div class = "back smiley" id="smiley${i}">
                <div class="nom" id="nom${i}"></div>
                <div class="prenom" id="prenom${i}"></div>
     
        </div>`;
        document.getElementById('taillecarte').appendChild(div);
    }
    start.disabled = true;

// fin
});




function rejouer () {
    for (let i = 0; i < tableauNomPrenom.length; i++) {
        document.getElementById("card" + (i+1)).classList.toggle('flip');
        start.disabled = true;
        setTimeout(function () {
            flipper.disabled = false;
            carte.disabled = false;
        }, 1500);
    }
}

flipper.addEventListener("click", function (event) {
    mixApprenants();
    setTimeout(
        function () {

        }
        , 1000
    )

});

function mixApprenants() {
    carte.disabled = true;
    let mixTableau = _.shuffle(tableauNomPrenom);
    for (let i = 0; i < mixTableau.length; i++) {
        document.getElementById('nom' + i).innerHTML = mixTableau[i].split(" ")[0];
        document.getElementById('prenom' + i).innerHTML = mixTableau[i].split(" ")[1];

        document.getElementById("smiley" + i).style.backgroundImage = "url('images/smiley/smiley-" + (Math.ceil(Math.random() * 14)) + ".png')";
        (function (x) {
            setTimeout(function () {
                document.querySelector("#card" + (x + 1)).classList.toggle('flip');
            }, 100 * x);
        })(i);
    }


    flipper.disabled = true;
    setTimeout(function () {
        start.disabled = false;
    }, 1500);

}


