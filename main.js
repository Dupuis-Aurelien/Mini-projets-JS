/* h1 and h2 Events */

/* Sélector */
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

/* function color */
let colorRed = function() {
    this.style.color = "red";
}
let colorBlue = function() {
    this.style.color = "blue";
}

/* h1 */
h1.addEventListener('mouseover', colorRed);
h1.addEventListener('mouseout', colorBlue);

/* h2 */
h2.addEventListener('click', colorBlue);



/******* Date() ******/

(function dateDuJour() {
    let date = new Date();

    let tableau_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    let tableau_jour = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche");

    let mois = tableau_mois[date.getMonth()];
    let jour = tableau_jour[date.getDay() - 1];

    let dateJour = jour + " " + date.getDate() + " " + mois + " " + date.getFullYear();

    document.getElementById("date").innerHTML = dateJour;

    setInterval(dateDuJour, 1000);
}())

(function horaireActuel() {
    let date = new Date();
    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    if (heures < 10) {
        heures = "0" + heures;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (secondes < 10) {
        secondes = "0" + secondes;
    }


    let horaire = heures + ":" + minutes + ":" + secondes;

    document.getElementById("horaire").innerHTML = horaire;

    setInterval(horaireActuel, 1000);
}())