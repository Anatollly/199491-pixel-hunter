import {getElementFromTemplate, displayElement} from './util';
import {levelData} from './data/level-data';
import {initialData, setLives, setTimer, setStats} from './data/game-data';
import {levelElement} from './level-element';
import showStats from './stats';


export let userData = Object.assign({}, initialData);

let timerId;

const goTimer = (element, callback) => {
  element.innerHTML = initialData.timer;
  userData.timer = initialData.timer;
  timerId = setInterval(() => {
    userData = setTimer(userData, userData.timer - 1);
    element.innerHTML = userData.timer;
    if (userData.timer <= 0) {
      callback();
    }
  }, 1000);
};

const changeLive = () => {
  userData = setLives(userData, userData.lives - 1);
  userData = setStats(userData, 'wrong', next - 1);
};

const getStats = () => {
  if (userData.timer > 20) {
    userData = setStats(userData, 'fast', next - 1);
  } else if (userData.timer < 10) {
    userData = setStats(userData, 'slow', next - 1);
  } else {
    userData = setStats(userData, 'correct', next - 1);
  }
};


const showGame = (mod, answers, func) => {
  displayElement(mod);
  for (let i of answers) {
    i.onclick = func;
  }
};

let next = 0;

const getNextLevel = (data) => {
  clearInterval(timerId);
  let currentData = data['level-' + next];

  const gameElement = levelElement(currentData, userData);
  const moduleGame = getElementFromTemplate(gameElement);

  let selector = '';
  let clickAnswer;
  let q = {};

  switch (currentData.typeOfGame) {
    case 'double':
      selector = '.game__answer input';
      clickAnswer = (evt) => {
        let a = new Set();
        let gameOption = moduleGame.querySelectorAll('.game__content .game__option');
        q[evt.target.name] = evt.target.value;
        if (Object.keys(q).length === gameOption.length) {
          for (let i in q) {
            if (q.hasOwnProperty(i)) {
              if (currentData.correctAnswer[i] === q[i]) {
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
        if (evt.target.value === currentData.correctAnswer.question1) {
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
        let gameOption = moduleGame.querySelectorAll(selector);
        if (evt.target === gameOption[currentData.correctAnswer - 1]) {
          getStats();
          goToNextLevel();
        } else {
          changeLive();
          goToNextLevel();
        }
      };
  }
  const gameAnswer = moduleGame.querySelectorAll(selector);
  const gameTimer = moduleGame.querySelector('.game__timer');

  next++;

  const goToNextLevel = () => {
    clearInterval(timerId);
    if (next + 1 > Object.keys(levelData).length || userData.lives === 0) {
      showStats(userData);
    } else {
      getNextLevel(data);
    }
  };

  goTimer(gameTimer, goToNextLevel);

  showGame(moduleGame, gameAnswer, clickAnswer);

};

export default getNextLevel;
