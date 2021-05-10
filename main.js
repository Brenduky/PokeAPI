let contenedor = document.getElementById("contenedorPokemon")

 const consultarPokemon = async (id, num) => {
        const resultado = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await resultado.json()

        console.log(pokemon)
       
        let result = crearPokemon(pokemon,num)

        contenedor.innerHTML = result

}

function consultarPokemones() {
            let primerID = Math.round(Math.random()*150)
            let segundoID = Math.round(Math.random()*150) 

            consultarPokemon(primerID, 1)
            consultarPokemon(segundoID, 2)
}


const crearPokemon = ({sprites,name},num) => {
    
    let item = contenedor.querySelector(`pokemon-${num}`)
    
    let imagen = contenedor.getElementsByTagName("img")[0]
    imagen.setAttribute("src", sprites.front_default )

    let nombre = contenedor.getElementsByTagName("p")[0]
    nombre.textContent = name
            
}

    consultarPokemones()