import getHash from '../utils/getHash';
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);

  const view = `
    <div class="Characters-inner">
      <article class="Characters-inner-card">
        <img src="${character.sprites.front_default}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-inner-info">
        <div>
          <h3>Type: <span>${character.types[0].type.name}</span></h3>
          <h3>Height: <span>${character.height}</span></h3>
          <h3>Weight: <span>${character.weight}</span></h3>
          <h3>Abilities: <span>${character.abilities[0].ability.name}, ${character.abilities[1].ability.name}</span></h3>
          <h3>Moves: <span>${character.moves[0].move.name}, ${character.moves[1].move.name}, ${character.moves[2].move.name}</span></h3>
        </div>
      </article>
    </div>
  `;
  return view
};

export default Character;