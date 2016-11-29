import getElementFromTemplate from './template';
import display from './display';
import showGame2 from './game-2';
import getResultStats from './resultStats';

const game1Data = {
  header: {
    timer: 'NN',
    lives1: 'img/heart__empty.svg',
    lives2: 'img/heart__full.svg',
    lives3: 'img/heart__full.svg'
  },
  game: {
    task: 'Угадайте для каждого изображения фото или рисунок?',
    content: {
      option1: 'http://placehold.it/468x458',
      option2: 'http://placehold.it/468x458'
    },
    stats: {
      result1: 'stats__result--wrong',
      result2: 'stats__result--slow',
      result3: 'stats__result--fast',
      result4: 'stats__result--correct',
      result5: 'stats__result--unknown',
      result6: 'stats__result--unknown',
      result7: 'stats__result--unknown',
      result8: 'stats__result--unknown',
      result9: 'stats__result--unknown',
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
  <h1 class="game__timer">${game1Data.header.timer}</h1>
  <div class="game__lives">
    <img src="${game1Data.header.lives1}" class="game__heart" alt="Life" width="32" height="32">
    <img src="${game1Data.header.lives2}" class="game__heart" alt="Life" width="32" height="32">
    <img src="${game1Data.header.lives3}" class="game__heart" alt="Life" width="32" height="32">
  </div>
</header>`;

const task = `<p class="game__task">${game1Data.game.task}</p>`;

const content = `<form class="game__content">
    <div class="game__option">
      <img src="${game1Data.game.content.option1}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="${game1Data.game.content.option2}" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>`;

const stats = `<div class="stats">
    <ul class="stats">
      ${getResultStats(game1Data.game.stats)}
    </ul>
  </div>`;

const game1Element = `
  ${header}
  <div class="game">
    ${task}
    ${content}
    ${stats}
  </div>`;

const moduleGame1 = getElementFromTemplate(game1Element);
const gameAnswer1 = moduleGame1.querySelectorAll('.game__answer');

const showGame1 = () => {
  display(moduleGame1);
  for (let i = 0; i < gameAnswer1.length; i++) {
    gameAnswer1[i].addEventListener('click', showGame2);
  }
};

export default showGame1;
