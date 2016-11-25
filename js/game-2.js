import getElementFromTemplate from './template';
import display from './display';
import showGame3 from './game-3';

const game2Data = {
  header: {
    timer: 'NN',
    lives1: 'img/heart__empty.svg',
    lives2: 'img/heart__full.svg',
    lives3: 'img/heart__full.svg'
  },
  game: {
    task: 'Угадай, фото или рисунок?',
    content: 'http://placehold.it/705x455',
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
  <h1 class="game__timer">${game2Data.header.timer}</h1>
  <div class="game__lives">
    <img src="${game2Data.header.lives1}" class="game__heart" alt="Life" width="32" height="32">
    <img src="${game2Data.header.lives2}" class="game__heart" alt="Life" width="32" height="32">
    <img src="${game2Data.header.lives3}" class="game__heart" alt="Life" width="32" height="32">
  </div>
</header>`;

const task = `<p class="game__task">${game2Data.game.task}</p>`;

const content = `<form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${game2Data.game.content}" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>`;

const stats = `<div class="stats">
    <ul class="stats">
      <li class="stats__result ${game2Data.game.stats.result1}"></li>
      <li class="stats__result ${game2Data.game.stats.result2}"></li>
      <li class="stats__result ${game2Data.game.stats.result3}"></li>
      <li class="stats__result ${game2Data.game.stats.result4}"></li>
      <li class="stats__result ${game2Data.game.stats.result5}"></li>
      <li class="stats__result ${game2Data.game.stats.result6}"></li>
      <li class="stats__result ${game2Data.game.stats.result7}"></li>
      <li class="stats__result ${game2Data.game.stats.result8}"></li>
      <li class="stats__result ${game2Data.game.stats.result9}"></li>
      <li class="stats__result ${game2Data.game.stats.result10}"></li>
    </ul>
  </div>`;

const game2Element = `
  ${header}
  <div class="game">
    ${task}
    ${content}
    ${stats}
  </div>`;

const moduleGame2 = getElementFromTemplate(game2Element);
const gameAnswer2 = moduleGame2.querySelectorAll('.game__answer');

const showGame2 = () => {
  display(moduleGame2);
  for (let i = 0; i < gameAnswer2.length; i++) {
    gameAnswer2[i].addEventListener('click', showGame3);
  }
};

export default showGame2;
