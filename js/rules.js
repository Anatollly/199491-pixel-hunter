import getElementFromTemplate from './template';
import display from './display';
import {levelData} from './data/level-data';
import headerBack from './header-back';
import getNextLevel from './game';

const rulesData = {
  iconPhoto: 'img/photo_icon.png',
  iconPaint: 'img/paint_icon.png',
  sumTasks: '10',
  time: '30',
  lives: '3'
};

const rulesText = `Угадай ${rulesData.sumTasks} раз для каждого изображения фото <img
  src="${rulesData.iconPhoto}" width="16" height="16"> или рисунок <img
  src="${rulesData.iconPaint}" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>
  На каждую попытку отводится ${rulesData.time} секунд.<br>
  Ошибиться можно не более ${rulesData.lives} раз.<br>
  <br>
  Готовы?`;

const getRulesElement = (data) => {
  const rulesElement = `<header class="header">
    ${headerBack}
  </header>
  <div class="rules  central--none">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">${rulesText}
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;

  return getElementFromTemplate(rulesElement);
};

const moduleRules = getRulesElement(rulesText);
const rulesSubmit = moduleRules.querySelector('.rules__button');
const rulesInput = moduleRules.querySelector('.rules__input');

const showRules = () => {
  display(moduleRules);
  rulesSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    getNextLevel(levelData);
  });
  rulesInput.oninput = () => {
    if (rulesInput.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };
};

export default showRules;
