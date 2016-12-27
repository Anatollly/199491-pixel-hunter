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

  const levelData = data.currentLevel;

  const task = `<p class="game__task">${levelData.question}</p>`;

  const getOptionTemplate = (num) => {
    return `<div class="game__option">
        <img src="" alt="Option 1" width="" height="">
        <label class="game__answer game__answer--photo">
          <input name="question${num + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${num + 1}" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>`;
  };

  const contentDouble = () => {
    return `<form class="game__content">
        ${getOptionTemplate(0)}
        ${getOptionTemplate(1)}
      </form>`;
  };

  const contentWide = () => {
    return `<form class="game__content  game__content--wide">
        ${getOptionTemplate(0)}
      </form>`;
  };

  const contentTriple = () => {
    return `<form class="game__content  game__content--triple">
        <div class="game__option">
        <img src="" alt="Option 1" width="" height="">
        </div>
        <div class="game__option  game__option--selected">
        <img src="" alt="Option 1" width="" height="">
        </div>
        <div class="game__option">
        <img src="" alt="Option 1" width="" height="">
        </div>
      </form>`;
  };

  let content = '';

  switch (levelData.type) {
    case 'two-of-two':
      content = contentDouble();
      break;
    case 'tinder-like':
      content = contentWide();
      break;
    case 'one-of-three':
      content = contentTriple();
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
