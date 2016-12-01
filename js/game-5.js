import showGame6 from './game-6';
import showNextGame from './game-element';

const gameData = {
  header: {
    timer: 'NN',
    lives1: 'img/heart__empty.svg',
    lives2: 'img/heart__full.svg',
    lives3: 'img/heart__full.svg'
  },
  typeOfGame: 'triple',
  game: {
    task: 'Найдите рисунок среди изображений',
    content: {
      option1: 'http://placehold.it/304x455',
      option2: 'http://placehold.it/304x455',
      option3: 'http://placehold.it/304x455'
    },
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
      result10: 'stats__result--fast'
    }
  }
};

const showGame5 = () => {
  showNextGame(gameData, showGame6);
};

export default showGame5;
