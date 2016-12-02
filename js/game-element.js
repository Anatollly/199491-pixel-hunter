import getResultStats from './result-stats';
import getElementFromTemplate from './template';
import headerBack from './header-back';
import display from './display';
import pushGameStats from './general-stats';

const showModule = (gameStats, callback) => {
  pushGameStats(gameStats);
  callback();
};

const showGame = (mod, answers, func) => {
  display(mod);
  for (let i of answers) {
    i.addEventListener('click', func);
  }
};

const showNextGame = (data, nextGame) => {
  const header = `<header class="header">
      ${headerBack}
    <h1 class="game__timer">${data.header.timer}</h1>
    <div class="game__lives">
      <img src="${data.header.lives1}" class="game__heart" alt="Life" width="32" height="32">
      <img src="${data.header.lives2}" class="game__heart" alt="Life" width="32" height="32">
      <img src="${data.header.lives3}" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header>`;

  const task = `<p class="game__task">${data.game.task}</p>`;

  const getOptionTemplate = (img, width, height) => {
    return `<div class="game__option">
        <img src="${img}" alt="Option 1" width="${width}" height="${height}">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`;
  };

  const contentDouble = `<form class="game__content">
        ${getOptionTemplate(data.game.content.option1, 468, 458)}
        ${getOptionTemplate(data.game.content.option2, 468, 458)}
      </form>`;

  const contentWide = `<form class="game__content  game__content--wide">
        ${getOptionTemplate(data.game.content, 705, 455)}
      </form>`;


  const contentTriple = `<form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${data.game.content.option1}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${data.game.content.option2}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${data.game.content.option3}" alt="Option 1" width="304" height="455">
        </div>
      </form>`;

  let content = '';
  let selector = '';

  switch (data.typeOfGame) {
    case 'double':
      content = contentDouble;
      selector = '.game__answer input';
      break;
    case 'wide':
      content = contentWide;
      selector = '.game__answer input';
      break;
    case 'triple':
      content = contentTriple;
      selector = '.game__option';
  }

  const stats = `<div class="stats">
      <ul class="stats">
        ${getResultStats(data.game.stats)}
      </ul>
    </div>`;

  const gameElement = `
    ${header}
    <div class="game">
      ${task}
      ${content}
      ${stats}
    </div>`;

  const moduleGame = getElementFromTemplate(gameElement);
  const gameAnswer = moduleGame.querySelectorAll(selector);

  const showNextModule = () => {
    showModule(data.game.stats, nextGame);
  };

  showGame(moduleGame, gameAnswer, showNextModule);
};

export default showNextGame;
