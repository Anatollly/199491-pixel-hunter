import LevelView from '../templates/level-view';
import Application from '../application';
import GameModel from '../data/model';
import 'whatwg-fetch';

class GamePresenter {
  constructor(model) {
    this.model = model;

    this.content = new LevelView(this.model);

    this.root = document.createElement('div');
    this.root.appendChild(this.content.element);

    this._timerID = null;
  }

  // запуск таймера
  goTimer(timerElement) {
    timerElement.innerHTML = this.model.initialState.timer;
    this.model.resetTimer();
    this._timerID = setInterval(() => {
      this.model.tick();
      timerElement.innerHTML = this.model.state.timer;
      if (this.model.state.timer <= 0) {
        this.goToNextLevelFalse();
      }
    }, 1000);
  }

  startGame() {
    this.changeLevel();
  }

  // получение статистики с сервера
  getUserStats() {
    const status = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    };

    window.fetch(`https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/${this.model.state.username}`).
        then(status).
        then((response) => response.json()).
        then((userData) => {
          Application.showStats(userData);
        }).
        catch(Application.showError);
  }

  // запись статистики на сервер
  setUserStats() {
    window.fetch(`https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/${this.model.state.username}`, {
      method: 'POST',
      body: JSON.stringify({
        'stats': this.model.state.stats,
        'lives': this.model.state.lives
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).
        then((status) => {
        }).
        then(() => {
          this.getUserStats();
        }).
        catch(Application.showError);
  }

  // функция показывает следующий уровень или, при окончании жизней или завершении уровней, экран статистики
  showNextLevel() {
    clearInterval(this._timerID);
    if (this.model.gameOver() || this.model.finish()) {
      this.setUserStats();
      // Application.showStats(this.model.state);
    } else {
      this.model.nextLevel();
      this.startGame();
    }
  }

  // переход на следующий уровень при неверном ответе
  goToNextLevelFalse() {
    this.model.changeLives();
    this.showNextLevel();
  }

  // переход на следующий уровень при верном ответе
  goToNextLevelTrue() {
    this.model.getStats();
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
    const level = new LevelView(this.model);
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

export default (questData, user) => {
  const gameModel = new GameModel(questData);
  const game = new GamePresenter(gameModel);
  gameModel.resetGame();
  gameModel.setUsername(user);
  game.startGame();
  return game.root;
};
