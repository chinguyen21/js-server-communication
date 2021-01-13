// const URL = 'http://localhost:3000/pokemon'

// document.addEventListener('DOMContentLoaded', () => {
//     fetch('http://localhost:3000/pokemon')
//       .then(res => res.json() )
//       .then(pokeData => console.log(pokeData) )
// })


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#pokeBtn').addEventListener('click', getPokemon)
})


const getPokemon = async () => {
    let response = await fetch('http://localhost:3000/pokemon');
    let pokeData = await response.json();
    pokeData.forEach(pokemon => renderPokemon(pokemon))
}

// const renderPokemon = (pokemon) => {
//   poke_tag = document.querySelector("#pokemon-container");
  
// }



const renderPokemon = (pokemon) => {
  debugger
  document.querySelector('#pokemon-container').innerHTML += ` <div class="card m-2">
  <img class="card-img-top" src=${pokemon.sprite} alt="Card image cap">
  <div class="card-body">
  <h5 class="card-title">${pokemon.name}</h5>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  </div>
  <div class="card-footer">
  <small class="text-muted">Last updated 3 mins ago</small>
  </div>
  </div>`
}



// const loadPokemon = () => {
//     fetch(URL)
//         .then(function(response){
//             return response.json()
//         })
//         .then(function(data){
//             data.forEach(mon => {
//                 renderPokemon(mon)
//             });
//         })
// }