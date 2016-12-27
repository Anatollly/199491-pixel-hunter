import {levelElement} from './level-element';
import AbstractView from '../abstract-view';
import imageLoader from '../image-loader/image-loader';

export default class LevelView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
    this.levelData = data.currentLevel;
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getMarkup() {
    return levelElement(this.data);
  }

  bindHandlers() {
    let selector = '';
    let clickAnswer;
    let q = {};

    switch (this.levelData.type) {
      case 'two-of-two':
        selector = '.game__answer input';
        clickAnswer = (evt) => {
          let gameOption = this.element.querySelectorAll('.game__content .game__option');
          q[evt.target.name] = evt.target.value;
          if (Object.keys(q).length === gameOption.length) {
            this._onAnswer(this.levelData.answers[0].type === q.question1 && this.levelData.answers[1].type === q.question2);
          }
        };
        break;
      case 'tinder-like':
        selector = '.game__answer input';
        clickAnswer = (evt) => {
          this._onAnswer(evt.target.value === this.levelData.answers[0].type);
        };
        break;
      case 'one-of-three':
        selector = '.game__option';
        clickAnswer = (evt) => {
          let ans;
          for (let i in this.levelData.answers) {
            if (this.levelData.question === 'Найдите фото среди изображений') {
              if (this.levelData.answers[i].type === 'photo') {
                ans = i;
              }
            } else if (this.levelData.answers[i].type === 'painting') {
              ans = i;
            }
          }
          let gameOption = this.element.querySelectorAll(selector);
          this._onAnswer(evt.target === gameOption[ans]);
        };
    }

    let elem = this._element.querySelectorAll('.game__option img');
    for (let i = 0; i < elem.length; i++) {
      imageLoader(elem[i]).load(this.levelData.answers[i].image);
    }

    const gameAnswer = this.element.querySelectorAll(selector);

    for (let i of gameAnswer) {
      i.onclick = clickAnswer;
    }
  }
}
