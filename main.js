let contenedor = document.getElementById("contenedorPokemon")

 const consultarPokemon = async (id, num) => {
        const resultado = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await resultado.json()

        console.log(pokemon)
       
        const result = crearPokemon(pokemon,num)

        contenedor.innerHTML = result

}

function consultarPokemones() {
            let primerID = Math.round(Math.random()*150)
            let segundoID = Math.round(Math.random()*150) 

            consultarPokemon(primerID, 1)
            consultarPokemon(segundoID, 2)
}


const crearPokemon = ({sprites,name,base_experience},num) => {
    return `        
    <div class="Pokemon">
        <img src="${sprites.front_default}" alt="${name} Sprite">
        <p>Pokemon${num}</p>
        <p>${name}</p>
        <p>${base_experience}</p>
    </div>        

    <div class="vs">VS</div>

    <div class="Pokemon">
        <img src="${sprites.front_default}" alt="${name} Sprite">
        <p>Pokemon${num}</p>
        <p>${name}</p>
        <p>${base_experience}</p>
    </div>
    `
            
}

    consultarPokemones()