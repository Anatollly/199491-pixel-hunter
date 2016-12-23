import Application from '../application';
import AbstractView from '../abstract-view';
import headerBack from '../templates/header-back';
import {initialState} from '../data/game-data';

class RulesView extends AbstractView {

  getMarkup() {
    return `<header class="header">
      ${headerBack}
    </header>
    <div class="rules  central--none">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится ${initialState.timer} секунд.<br>
        Ошибиться можно не более ${initialState.lives} раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>`;
  }

  bindHandlers() {
    const rulesSubmit = this.element.querySelector('.rules__button');
    const rulesInput = this.element.querySelector('.rules__input');
    rulesSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      Application.showGame();
    });
    rulesInput.oninput = () => {
      if (rulesInput.value) {
        rulesSubmit.removeAttribute('disabled');
      } else {
        rulesSubmit.setAttribute('disabled', '');
      }
    };
  }

}

export default () => new RulesView().element;
