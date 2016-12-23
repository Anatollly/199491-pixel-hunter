import LevelView from '../templates/level-view';
import Application from '../application';
import gameModel from '../data/model';

class GamePresenter {
  constructor() {
    this.content = new LevelView(gameModel);

    this.root = document.createElement('div');
    this.root.appendChild(this.content.element);

    this._timerID = null;
  }

  // запуск таймера
  goTimer(timerElement) {
    timerElement.innerHTML = gameModel.initialState.timer;
    gameModel.resetTimer();
    this._timerID = setInterval(() => {
      gameModel.tick();
      timerElement.innerHTML = gameModel.state.timer;
      if (gameModel.state.timer <= 0) {
        this.goToNextLevelFalse();
      }
    }, 1000);
  }

  startGame() {
    this.changeLevel();
  }

  // функция показывает следующий уровень или, при окончании жизней или завершении уровней, экран статистики
  showNextLevel() {
    clearInterval(this._timerID);
    if (gameModel.gameOver() || gameModel.finish()) {
      Application.showStats(gameModel.state);
    } else {
      gameModel.nextLevel();
      this.startGame();
    }
  }

  // переход на следующий уровень при неверном ответе
  goToNextLevelFalse() {
    gameModel.changeLives();
    this.showNextLevel();
  }

  // переход на следующий уровень при верном ответе
  goToNextLevelTrue() {
    gameModel.getStats();
    this.showNextLevel();
  }

  // переход на следующий уровень в зависимости от ответа
  goToNextLevel(isCorrect) {
    if (isCorrect) {
      this.goToNextLevelTrue();
    } else {
      this.goToNextLevelFalse();
    }
  }

  changeLevel() {
    const level = new LevelView(gameModel);
    level.onAnswer = this.goToNextLevel.bind(this);
    this.changeContentView(level);
  }

  changeContentView(viewLevel) {
    this.root.replaceChild(viewLevel.element, this.content.element);
    const timer = viewLevel.element.querySelector('.game__timer');
    this.goTimer(timer);
    this.content = viewLevel;
  }

}

const game = new GamePresenter();

export default () => {
  gameModel.resetGame();
  game.startGame();
  return game.root;
};
