var url = "https://pokeapi.co/api/v2/pokemon"

var pokemonList;

if (localStorage.getItem("pokemonName") === null || undefined) {

    async function getData() {
        try {
            pokemonList = [];
            let res = await fetch(url);
            let data = await res.json();

            console.log(data);
            pokemonList.push(data);
            localStorage.setItem("pokemonName", JSON.stringify(pokemonList))

        } catch (err) {
            console.log(err)
        }
    }
    getData();
} else {
    pokemonList = JSON.parse(localStorage.getItem("pokemonName"))
    displayPokemonNames();
}

function displayPokemonNames() {

    pokemonList[0].results.forEach(function(char) {

        let container = document.createElement("tr");
        container.setAttribute("class", "tableRows");
        container.innerText = char.name;

        document.querySelector("#tableBody").append(container)

        console.log(char.name)

    });

}


function showResults() {


}
// https://pokeapi.co/api/v2/pokemon/{id or name}/