let button = document.querySelectorAll("button");

let calculer = document.getElementById("calculer");

let resultat = document.getElementById("resultat");

let somme = 0;

for (let index = 0; index < button.length; index++) {
    button[index].addEventListener("click", function() {

        /* Effacer tout */
        if (button[index].innerHTML == "AC") {
            resultat.innerHTML = "";
            somme = "";

        } /* Retourne le résultat */
        else if (button[index].innerHTML == "=") {
            resultat.innerHTML = eval(resultat.innerHTML);

        } /* Envoi la valeur dans le paragraphe résultat */
        else {
            resultat.innerHTML += button[index].innerHTML;
            somme = resultat.innerHTML;
        }

        /* Effacer la derniére entrée */
        if (button[index].innerHTML == "CE") {
            resultat.innerHTML = somme.replace(somme.slice(-3), "");
        }

        /* Rien à calculer */
        if ((button[index].innerHTML !== "AC" && somme === "") || somme === "0") {
            alert("Rien à calculer");
            resultat.innerHTML = "";
            somme = "";
        }

        /* Rien à calculer2 */
        if (button[index].innerHTML == "=" && somme === "CE") {
            alert("Rien à calculer");
            resultat.innerHTML = "";
            somme = "";
        }





        /* Limiter la longueur */
        if (somme.length > 23) {

            if (button[index].innerHTML == "CE") {
                resultat.innerHTML = somme.replace(somme.slice(-3), "");
            } else {
                resultat.innerHTML = somme.replace(somme.slice(-1), "");
                alert("trop de caractéres");
            }

        }


    });
}