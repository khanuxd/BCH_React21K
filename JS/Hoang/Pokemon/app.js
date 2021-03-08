(function () {
    document.addEventListener('DOMContentLoaded', executeScript);

    const pokemons = [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/",
        }
    ]

    function executeScript() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
            .then(resp => resp.json())
            .then(json => {
                json.results.forEach(addPokemon)
            })
    }

    function addPokemon(pokemon) {
        let newUrl;
        let url = pokemon.url;
        fetch(url)
        .then(response => response.json())
        .then(json => {
            newUrl = json.sprites.front_default
            console.log(newUrl)

        const newEl = document.createElement('div');
        newEl.className = 'pokemon';
        newEl.innerHTML = `
        <div class="name"><a href="${newUrl}">${pokemon.name}</a></div>
        `;
        document.getElementById('pokemon-list').appendChild(newEl);

        })
    }

})()