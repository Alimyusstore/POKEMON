async function displayPokemon(){
    try{
        const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        let pokemonSprite = data.sprites.front_default;
        const resultImg = document.getElementById("resultImg");
        resultImg.src = pokemonSprite;
        resultImg.style.display = "block";
        resultImg.style.margin = " 0 auto";
    }
    catch(err){
        console.log(err);
    }
}
displayPokemon();