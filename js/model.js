import {levelData} from './data/level-data';
import {initialData, setLives, setTimer, setStats, setLevel} from './data/game-data';

export default class Model {
  constructor(state = initialData) {
    this._state = state;
  }

  // получение текущих данных
  get state() {
    return this._state;
  }

  // получение начальных данных
  get inititalState() {
    return initialData;
  }

  // уменьшение таймера на 1 сек
  tick() {
    this._state = setTimer(this._state, this._state.timer - 1);
  }

  // сброс таймера
  resetTimer() {
    this._state = setTimer(this._state, initialData.timer);
  }

  // увелечение уровня игра на 1
  nextLevel() {
    this._state = setLevel(this._state, this._state.currentLevel + 1);
  }

  // окончание жизней
  gameOver() {
    return this._state.lives <= 0;
  }

  // завершение уровней
  finish() {
    return this._state.currentLevel + 1 === Object.keys(levelData).length;
  }

  // уменьшение жизней на одну и запись отрицательной статистики
  changeLives() {
    this._state = setLives(this._state, this._state.lives - 1);
    this._state = setStats(this._state, 'wrong', this._state.currentLevel);
  }

  // запись положительной статистики
  getStats() {
    if (this._state.timer > 20) {
      this._state = setStats(this._state, 'fast', this._state.currentLevel);
    } else if (this._state.timer < 10) {
      this._state = setStats(this._state, 'slow', this._state.currentLevel);
    } else {
      this._state = setStats(this._state, 'correct', this._state.currentLevel);
    }
  }

}
