    let contenedor = document.getElementById("contenedorPokemon")

       function consultarPokemon(id, num) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(function (response) {
            response.json()
            .then(function (pokemon) {
                crearPokemon(pokemon,num)
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
            
        }

        consultarPokemones()


        //https://www.youtube.com/watch?v=MZWUKEkcQaY&t=399s