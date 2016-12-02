import showGame8 from './game-8';
import showNextGame from './game-element';

const gameData = {
  header: {
    timer: 'NN',
    lives1: 'img/heart__empty.svg',
    lives2: 'img/heart__full.svg',
    lives3: 'img/heart__full.svg'
  },
  typeOfGame: 'wide',
  game: {
    task: 'Угадай, фото или рисунок?',
    content: 'http://placehold.it/705x455',
    stats: {
      result1: 'stats__result--wrong',
      result2: 'stats__result--slow',
      result3: 'stats__result--fast',
      result4: 'stats__result--correct',
      result5: 'stats__result--wrong',
      result6: 'stats__result--unknown',
      result7: 'stats__result--slow',
      result8: 'stats__result--unknown',
      result9: 'stats__result--fast',
      result10: 'stats__result--slow'
    }
  }
};

const showGame7 = () => {
  showNextGame(gameData, showGame8);
};

export default showGame7;
