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

    setTimeout(dateDuJour, 1);
    setInterval(dateDuJour, 1000);
}())

(function horaireActuel() {
    let date = new Date();

    let horaire = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    document.getElementById("horaire").innerHTML = horaire;

    setTimeout(horaireActuel, 1);
    setInterval(horaireActuel, 1000);
}())