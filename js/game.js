import {displayElement} from './util';
import {levelData} from './data/level-data';
import {initialData, setLives, setTimer, setStats, setLevel} from './data/game-data';
import {levelElement} from './templates/level-element';
import showStats from './stats';
import AbstractView from './abstract-view';


export let userData = Object.assign({}, initialData);

let timerId;

const goTimer = (element, callback) => {
  element.innerHTML = initialData.timer;
  userData.timer = initialData.timer;
  timerId = setInterval(() => {
    userData = setTimer(userData, userData.timer - 1);
    element.innerHTML = userData.timer;
    if (userData.timer <= 0) {
      changeLive();
      callback();
    }
  }, 1000);
};

const changeLive = () => {
  userData = setLives(userData, userData.lives - 1);
  userData = setStats(userData, 'wrong', userData.currentLevel);
};

const getStats = () => {
  if (userData.timer > 20) {
    userData = setStats(userData, 'fast', userData.currentLevel);
  } else if (userData.timer < 10) {
    userData = setStats(userData, 'slow', userData.currentLevel);
  } else {
    userData = setStats(userData, 'correct', userData.currentLevel);
  }
};

const goToNextLevel = () => {
  clearInterval(timerId);
  if (userData.currentLevel + 1 === Object.keys(levelData).length || userData.lives === 0) {
    showStats(userData);
  } else {
    userData = setLevel(userData, userData.currentLevel + 1);
    displayElement(new GameView(userData).element);
  }
};

class GameView extends AbstractView {
  constructor(data) {
    super();
    this.dataOfLevel = levelData[`level-${data.currentLevel}`];
  }

  getMarkup() {
    return levelElement(this.dataOfLevel, userData);
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
              changeLive();
              goToNextLevel();
            } else {
              getStats();
              goToNextLevel();
            }
          }
        };
        break;
      case 'wide':
        selector = '.game__answer input';
        clickAnswer = (evt) => {
          if (evt.target.value === this.dataOfLevel.correctAnswer.question1) {
            getStats();
            goToNextLevel();
          } else {
            changeLive();
            goToNextLevel();
          }
        };
        break;
      case 'triple':
        selector = '.game__option';
        clickAnswer = (evt) => {
          let gameOption = this._element.querySelectorAll(selector);
          if (evt.target === gameOption[this.dataOfLevel.correctAnswer - 1]) {
            getStats();
            goToNextLevel();
          } else {
            changeLive();
            goToNextLevel();
          }
        };
    }

    const gameAnswer = this._element.querySelectorAll(selector);
    const gameTimer = this._element.querySelector('.game__timer');

    goTimer(gameTimer, goToNextLevel);

    for (let i of gameAnswer) {
      i.onclick = clickAnswer;
    }
  }
}

export default () => {
  displayElement(new GameView(userData).element);
};
