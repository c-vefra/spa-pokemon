import getDataArray from "../utils/getDataArray";

const Home = async () => {
  const characters = await getDataArray();
  const view = `
    <div class="Characters">
      ${characters.map(character => `
        <article class="Character-card">
          <a href="#/${character.id}/">
            <img src="${character.sprites.front_default}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;