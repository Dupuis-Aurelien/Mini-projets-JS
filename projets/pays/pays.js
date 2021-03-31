document.querySelector('#pays').addEventListener('input', function() {
    if (this.value.length > 2) {
        let url = `https://restcountries.eu/rest/v2/name/${this.value}`;

        fetch(url)
            .then((response) =>
                response.json()
                .then((data) => {

                    let resultat = '<ul>';
                    for (let pays of data) {
                        resultat +=
                            `<li><strong> Nom(d'origine) : ${pays.name}</strong></li>
                <li> Capital : ${pays.capital}</li>
                <li> Population : ${pays.population}</li>
                <li> Continant : ${pays.region}</li>
                <li> Drapeau : <img class="drapeau" src="${pays.flag}" alt="${pays.name}">
                </li><br>`;
                    }
                    resultat += '<ul>';
                    document.querySelector('#resultats').innerHTML = resultat;

                })).catch(err => console.log('Erreur : ' + err));
    }
});