import {getResultStats} from '../util';
import headerBack from './header-back';


export const levelElement = (data) => {

  const headerElement = () => {
    const imgHeartFull = '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
    const imgHeartEmpty = '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
    let hearts = '';

    const getCurrentLives = () => {
      let lives = data.initialState.lives;
      let full = data.state.lives;
      let empty = lives - full;
      for (let i = 0; i < lives; i++) {
        if (i < empty) {
          hearts += imgHeartEmpty;
        } else {
          hearts += imgHeartFull;
        }
      }
      return hearts;
    };

    const header = `<header class="header">
        ${headerBack}
      <h1 class="game__timer">NN</h1>
      <div class="game__lives">
        ${getCurrentLives()}
      </div>
    </header>`;

    return header;
  };


  const task = `<p class="game__task">${data.currentLevel.task}</p>`;

  const getOptionTemplate = (img, width, height, num) => {
    return `<div class="game__option">
        <img src="${img}" alt="Option 1" width="${width}" height="${height}">
        <label class="game__answer game__answer--photo">
          <input name="question${num}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${num}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`;
  };

  const contentDouble = `<form class="game__content">
        ${getOptionTemplate(data.currentLevel.content.option1, 468, 458, 1)}
        ${getOptionTemplate(data.currentLevel.content.option2, 468, 458, 2)}
      </form>`;

  const contentWide = `<form class="game__content  game__content--wide">
  ${getOptionTemplate(data.currentLevel.content, 705, 455, 1)}
      </form>`;


  const contentTriple = `<form class="game__content  game__content--triple">
        <div class="game__option">
        <img src="${data.currentLevel.content.option1}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
        <img src="${data.currentLevel.content.option2}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
        <img src="${data.currentLevel.content.option3}" alt="Option 1" width="304" height="455">
        </div>
      </form>`;

  let content = '';

  switch (data.currentLevel.typeOfGame) {
    case 'double':
      content = contentDouble;
      break;
    case 'wide':
      content = contentWide;
      break;
    case 'triple':
      content = contentTriple;
  }

  const stats = `<div class="stats">
      <ul class="stats">
        ${getResultStats(data.state.stats)}
      </ul>
    </div>`;

  const gameElement = `
    ${headerElement()}
    <div class="game">
      ${task}
      ${content}
      ${stats}
    </div>`;

  return gameElement;
};
