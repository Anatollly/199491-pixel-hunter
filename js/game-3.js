import getElementFromTemplate from './template';
import display from './display';
import showStats from './stats';
import getResultStats from './resultStats';

const game3Data = {
  header: {
    timer: 'NN',
    lives1: 'img/heart__empty.svg',
    lives2: 'img/heart__full.svg',
    lives3: 'img/heart__full.svg'
  },
  game: {
    task: 'Найдите рисунок среди изображений',
    content: {
      option1: 'http://placehold.it/304x455',
      option2: 'http://placehold.it/304x455',
      option3: 'http://placehold.it/304x455'
    },
    stats: {
      result1: 'stats__result--wrong',
      result2: 'stats__result--slow',
      result3: 'stats__result--fast',
      result4: 'stats__result--correct',
      result5: 'stats__result--wrong',
      result6: 'stats__result--unknown',
      result7: 'stats__result--slow',
      result8: 'stats__result--unknown',
      result9: 'stats__result--fast',
      result10: 'stats__result--unknown'
    }
  }
};

const header = `<header class="header">
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
  <h1 class="game__timer">${game3Data.header.timer}</h1>
  <div class="game__lives">
    <img src="${game3Data.header.lives1}" class="game__heart" alt="Life" width="32" height="32">
    <img src="${game3Data.header.lives2}" class="game__heart" alt="Life" width="32" height="32">
    <img src="${game3Data.header.lives3}" class="game__heart" alt="Life" width="32" height="32">
  </div>
</header>`;

const task = `<p class="game__task">${game3Data.game.task}</p>`;

const content = `<form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="${game3Data.game.content.option1}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="${game3Data.game.content.option2}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="${game3Data.game.content.option3}" alt="Option 1" width="304" height="455">
    </div>
  </form>`;

const stats = `<div class="stats">
    <ul class="stats">
      ${getResultStats(game3Data.game.stats)}
    </ul>
  </div>`;

const game3Element = `
  ${header}
  <div class="game">
    ${task}
    ${content}
    ${stats}
  </div>`;

const moduleGame3 = getElementFromTemplate(game3Element);
const gameAnswer3 = moduleGame3.querySelectorAll('.game__option');

const showGame3 = () => {
  display(moduleGame3);
  for (let i = 0; i < gameAnswer3.length; i++) {
    gameAnswer3[i].addEventListener('click', showStats);
  }
};

export default showGame3;
