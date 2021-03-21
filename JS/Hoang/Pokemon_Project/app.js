(function () {

    const form = document.querySelector('.search-area');

    const userInput = document.getElementById('userSearch');

    document.querySelector('.poke-result').style.display = 'none';

    form.addEventListener('submit', executeScript)

    function executeScript(e) {
        document.querySelector('.poke-result').style.display = 'flex';
        const pokeApi = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${userInput.value}`;

        fetch(pokeApi)
            .then(resp => resp.json())
            .then(json => {
                json.results.forEach(addPokemon);
                console.log(json.results[0]);
                document.querySelectorAll('.pokemon .name').forEach(el => {
                    el.addEventListener('click', (e) => {
                        fetch(e.target.getAttribute('current-url'))
                            .then(resp => resp.json())
                            .then(json => {
                                console.log(json.sprites.front_default)
                                document.getElementById('current-pokemon').setAttribute('src', json.sprites.front_default);
                            })
                    })
                })
            })
        document.querySelector('.pokemon-heading').innerHTML = `${userInput.value} results found <span> click on the name for the image </span>`;
        e.preventDefault();
        document.getElementById('pokemon-list').innerHTML = '';
        document.getElementById('current-pokemon').setAttribute('src', '');
        form.reset();
    }

    function addPokemon(pokemon) {
        const newEl = document.createElement('div');
        newEl.className = 'pokemon';
        newEl.innerHTML = `
        <div class="name" current-url = "${pokemon.url}">${pokemon.name}</div>
        `;
        document.getElementById('pokemon-list').appendChild(newEl);
    }
})()