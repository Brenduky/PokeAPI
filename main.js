let contenedor = document.getElementById("contenedorPokemon")

    const consultarPokemon = async (id, num) => {
        const resultado = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const datos = await resultado.json()
        const pokemones = datos.results

        const result = pokemones 
        .map((pokemon) => crearPokemon(pokemon, num))
        .join(' ')

        contenedor.innerHTML = result
        console.log(pokemones)

    }

        function consultarPokemones() {
            let primerID = Math.round(Math.random()*150)
            let segundoID = Math.round(Math.random()*150) 

            consultarPokemon(primerID, 1)
            consultarPokemon(segundoID, 2)
        }

        function crearPokemon(pokemon,num) {
            return `holiwi`
            
        }

        consultarPokemones()