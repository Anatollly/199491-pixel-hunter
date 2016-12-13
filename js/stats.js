import getElementFromTemplate from './template';
import display from './display';
import getResultStats from './result-stats';
import headerBack from './header-back';

let objectStats = {
  correct: 0,
  fast: 0,
  slow: 0,
  wrong: 0
};

const getStats = (stats) => {
  for (let i of stats) {
    switch (i) {
      case 'correct':
        objectStats.correct++;
        break;
      case 'fast':
        objectStats.fast++;
        break;
      case 'slow':
        objectStats.slow++;
        break;
      case 'wrong':
        objectStats.wrong++;
    }
  }
  return objectStats;
};

const showStats = (data) => {

  const resultStats = getStats(data.stats);

  const getResult = () => {
    let result = '';
    if (resultStats.wrong < 3) {
      result = 'Победа!';
    } else {
      result = 'FAIL!';
    }
    return result;
  };

  const getPoints = () => {
    return (resultStats.correct + resultStats.fast + resultStats.slow) * 100;
  };

  const showPointsFast = () => {
    let pointsFast = '';
    if (resultStats.fast > 0) {
      pointsFast = `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${resultStats.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${resultStats.fast * 50}</td>
        </tr>`;
    }
    return pointsFast;
  };

  const showPoiontsSlow = () => {
    let pointsSlow = '';
    if (resultStats.slow > 0) {
      pointsSlow = `<tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${resultStats.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${resultStats.slow * 50 * -1}</td>
        </tr>`;
    }
    return pointsSlow;
  };

  const showPointsOfLives = () => {
    let pointsOfLives = '';
    if (data.lives > 0) {
      pointsOfLives = `<tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${data.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${data.lives * 50}</td>
        </tr>`;
    }
    return pointsOfLives;
  };

  const getTotalPoints = () => {
    return getPoints() + resultStats.fast * 50 + resultStats.slow * 50 * -1 + data.lives * 50;
  };

  const getStatsElement = () => {
    const header = `<header class="header">
      ${headerBack}
    </header>`;

    const result = `<h1>${getResult()}</h1>`;

    const game1Result = `<table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
          ${getResultStats(data.stats)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${getPoints()}</td>
      </tr>
      ${showPointsFast()}
      ${showPointsOfLives()}
      ${showPoiontsSlow()}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${getTotalPoints()}</td>
      </tr>
    </table>`;

    const statsElement = `
      ${header}
      <div class="result">
        ${result}
        ${game1Result}
      </div>`;

    return getElementFromTemplate(statsElement);
  };

  const moduleStats = getStatsElement();

  display(moduleStats);
};

export default showStats;
