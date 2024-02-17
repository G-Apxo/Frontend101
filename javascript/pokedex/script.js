const poke_container = document.getElementById("poke_contianer");
const pokemon_count = 150;

const getPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await fetchPokemons(i);
  }
};
const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
const main_types = Object.keys(colours);
const fetchPokemons = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) >= 0);
  console.log(type);
  pokemonEl.classList.add(type);
  const id = pokemon.id.toString().padStart(3, "0");
  const color = colours[type];
  pokemonEl.style.backgroundColor = color;
  const prokemonInnerHTML = `
    <div class="img-container">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      </div>
        <div class="info">
          <span class="number">#${id}</span>
          <h3 class="name">${pokemon.name}</h3>
        </div>
        `;
  pokemonEl.addEventListener("click", () => {
    window.location.href = `description.html?id=${pokemon.id}`;
  });
  pokemonEl.innerHTML = prokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
};
getPokemons();



const data = true

