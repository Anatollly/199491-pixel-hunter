import {displayElement} from './util';
import {levelData} from './data/level-data';
import {levelElement} from './templates/level-element';
import showStats from './stats';
import AbstractView from './abstract-view';
import GameModel from './model';

const Model = new GameModel();

let timerId;

// запуск таймера
const goTimer = (element) => {
  element.innerHTML = Model.inititalState.timer;
  Model.resetTimer();
  timerId = setInterval(() => {
    Model.tick();
    element.innerHTML = Model.state.timer;
    if (Model.state.timer <= 0) {
      goToNextLevelFalse();
    }
  }, 1000);
};

// переход на следующий уровень или, при окончании жизней или завершении уровней, на экран статистики
const goToNextLevel = () => {
  clearInterval(timerId);
  if (Model.gameOver() || Model.finish()) {
    showStats(Model.state);
  } else {
    Model.nextLevel();
    displayElement(new GameView(Model.state).element);
  }
};

// переход на следующий уровень при неверном ответе
const goToNextLevelFalse = () => {
  Model.changeLives();
  goToNextLevel();
};

// переход на следующий уровень при верном ответе
const goToNextLevelTrue = () => {
  Model.getStats();
  goToNextLevel();
};

class GameView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
    this.dataOfLevel = levelData[`level-${this.data.currentLevel}`];
  }

  getMarkup(data) {
    return levelElement(this.dataOfLevel, this.data);
  }

  bindHandlers() {
    let selector = '';
    let clickAnswer;
    let q = {};

    switch (this.dataOfLevel.typeOfGame) {
      case 'double':
        selector = '.game__answer input';
        clickAnswer = (evt) => {
          let a = new Set();
          let gameOption = this._element.querySelectorAll('.game__content .game__option');
          q[evt.target.name] = evt.target.value;
          if (Object.keys(q).length === gameOption.length) {
            for (let i in q) {
              if (q.hasOwnProperty(i)) {
                if (this.dataOfLevel.correctAnswer[i] === q[i]) {
                  a.add(true);
                } else {
                  a.add(false);
                }
              }
            }
            if (a.has(false)) {
              goToNextLevelFalse();
            } else {
              goToNextLevelTrue();
            }
          }
        };
        break;
      case 'wide':
        selector = '.game__answer input';
        clickAnswer = (evt) => {
          if (evt.target.value === this.dataOfLevel.correctAnswer.question1) {
            goToNextLevelTrue();
          } else {
            goToNextLevelFalse();
          }
        };
        break;
      case 'triple':
        selector = '.game__option';
        clickAnswer = (evt) => {
          let gameOption = this._element.querySelectorAll(selector);
          if (evt.target === gameOption[this.dataOfLevel.correctAnswer - 1]) {
            goToNextLevelTrue();
          } else {
            goToNextLevelFalse();
          }
        };
    }

    const gameAnswer = this._element.querySelectorAll(selector);
    const gameTimer = this._element.querySelector('.game__timer');

    goTimer(gameTimer);

    for (let i of gameAnswer) {
      i.onclick = clickAnswer;
    }
  }
}

export default () => {
  displayElement(new GameView(Model.state).element);
};
