    let contenedor = document.getElementById("contenedorPokemon")

       function consultarPokemon(id, num) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(function (response) {
            response.json()
            .then(function (pokemon) {
                crearPokemon(pokemon,num)
                console.log (pokemon.name, num)
            })
        })
    }

        function consultarPokemones() {
            let primerID = Math.round(Math.random()*150)
            let segundoID = Math.round(Math.random()*150) 

            consultarPokemon(primerID, 1)
            consultarPokemon(segundoID, 2)
        }

        function crearPokemon(pokemon,num) {
            let item = contenedor.querySelector(`#pokemon-${num}`)
            
            let imagen = item.getElementsByTagName("img")[0]
            imagen.setAttribute("src", pokemon.sprites.front_default );
            imagen.setAttribute("alt", pokemon.name)
        
            let nombre = item.getElementsByTagName("p")[0]
            nombre.textContent = pokemon.name  
        }

        consultarPokemones()


        //https://www.youtube.com/watch?v=MZWUKEkcQaY&t=399s