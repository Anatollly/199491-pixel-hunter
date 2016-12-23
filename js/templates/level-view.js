import {levelElement} from './level-element';
import AbstractView from '../abstract-view';

export default class LevelView extends AbstractView {
  constructor(levelData) {
    super();
    this.levelData = levelData;
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getMarkup() {
    return levelElement(this.levelData);
  }

  bindHandlers() {
    let selector = '';
    let clickAnswer;
    let q = {};

    switch (this.levelData.currentLevel.typeOfGame) {
      case 'double':
        selector = '.game__answer input';
        clickAnswer = (evt) => {
          let a = new Set();
          let gameOption = this.element.querySelectorAll('.game__content .game__option');
          q[evt.target.name] = evt.target.value;
          if (Object.keys(q).length === gameOption.length) {
            for (let i in q) {
              if (q.hasOwnProperty(i)) {
                if (this.levelData.currentLevel.correctAnswer[i] === q[i]) {
                  a.add(true);
                } else {
                  a.add(false);
                }
              }
            }
            this._onAnswer(!a.has(false));
          }
        };
        break;
      case 'wide':
        selector = '.game__answer input';
        clickAnswer = (evt) => {
          this._onAnswer(evt.target.value === this.levelData.currentLevel.correctAnswer.question1);
        };
        break;
      case 'triple':
        selector = '.game__option';
        clickAnswer = (evt) => {
          let gameOption = this.element.querySelectorAll(selector);
          this._onAnswer(evt.target === gameOption[this.levelData.currentLevel.correctAnswer - 1]);
        };
    }

    const gameAnswer = this.element.querySelectorAll(selector);

    for (let i of gameAnswer) {
      i.onclick = clickAnswer;
    }
  }
}
