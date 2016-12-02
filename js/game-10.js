import showStats from './stats';
import showNextGame from './game-element';

const gameData = {
  header: {
    timer: 'NN',
    lives1: 'img/heart__empty.svg',
    lives2: 'img/heart__full.svg',
    lives3: 'img/heart__full.svg'
  },
  typeOfGame: 'double',
  game: {
    task: 'Угадайте для каждого изображения фото или рисунок?',
    content: {
      option1: 'http://placehold.it/468x458',
      option2: 'http://placehold.it/468x458'
    },
    stats: {
      result1: 'stats__result--wrong',
      result2: 'stats__result--slow',
      result3: 'stats__result--fast',
      result4: 'stats__result--correct',
      result5: 'stats__result--unknown',
      result6: 'stats__result--unknown',
      result7: 'stats__result--unknown',
      result8: 'stats__result--unknown',
      result9: 'stats__result--unknown',
      result10: 'stats__result--wrong'
    }
  }
};

const showGame10 = () => {
  showNextGame(gameData, showStats);
};

export default showGame10;
