import {levelData} from './level-data';
import {initialState, setLives, setTimer, setStats, setLevel} from './game-data';

const FAST_TIME = 20;
const SLOW_TIME = 10;

class Model {
  constructor(state = initialState) {
    this._state = state;
  }

  // получение текущих данных
  get state() {
    return this._state;
  }

  // получение начальных данных
  get initialState() {
    return initialState;
  }

  // текущий уровень

  get currentLevel() {
    return levelData[`level-${this._state.currentLevel}`];
  }

  resetGame() {
    this._state = initialState;
  }

  // уменьшение таймера на 1 сек
  tick() {
    this._state = setTimer(this._state, this._state.timer - 1);
  }

  // сброс таймера
  resetTimer() {
    this._state = setTimer(this._state, initialState.timer);
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
    if (this._state.timer > FAST_TIME) {
      this._state = setStats(this._state, 'fast', this._state.currentLevel);
    } else if (this._state.timer < SLOW_TIME) {
      this._state = setStats(this._state, 'slow', this._state.currentLevel);
    } else {
      this._state = setStats(this._state, 'correct', this._state.currentLevel);
    }
  }

}

export default new Model();
