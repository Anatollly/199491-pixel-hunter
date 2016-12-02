import getElementFromTemplate from './template';
import display from './display';
import getResultStats from './result-stats';
import headerBack from './header-back';
import {a} from './general-stats';

const showStats = () => {
  const statsData = {
    result: 'Победа!',
    game1Result: {
      resultGeneral: {
        stats: a[0],
        points: '100',
        total: '900'
      },
      resultSpeed: {
        bonus: 'Бонус за скорость:',
        sum: '1',
        points: '50',
        total: '50'
      },
      resultLives: {
        bonus: 'Бонус за жизни:',
        sum: '2',
        points: '50',
        total: '100'
      },
      resultSlow: {
        bonus: 'Штраф за медлительность:',
        sum: '2',
        points: '50',
        total: '-100'
      },
      resultTotal: '950'
    },
    game2Result: {
      stats: a[1],
      resultTotal: 'fail'
    },
    game3Result: {
      resultGeneral: {
        stats: a[2],
        points: '100',
        total: '900'
      },
      resultLives: {
        bonus: 'Бонус за жизни:',
        sum: '2',
        points: '50',
        total: '100'
      },
      resultTotal: 950
    }
  };

  const getStatsElement = (data) => {
    const header = `<header class="header">
      ${headerBack}
    </header>`;

    const result = `<h1>${statsData.result}</h1>`;

    const getPointAndTotalTemplate = (numOfGame) => {
      let num = `game${numOfGame}Result`;
      return `<td class="result__points">×&nbsp;${statsData[num].resultGeneral.points}</td>
              <td class="result__total">${statsData[num].resultGeneral.total}</td>`;
    };

    const getResultGameTemplate = (numOfGame, typeOfStats) => {
      let num = `game${numOfGame}Result`;
      let type = `result${typeOfStats}`;
      let numStats = statsData[num];
      return `<tr>
                <td></td>
                <td class="result__extra">${numStats[type].bonus}</td>
                <td class="result__extra">${numStats[type].sum}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                <td class="result__points">×&nbsp;${numStats[type].points}</td>
                <td class="result__total">${numStats[type].total}</td>
              </tr>`;
    };

    const game1Result = `<table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${getResultStats(statsData.game1Result.resultGeneral.stats)}
          </ul>
        </td>
        ${getPointAndTotalTemplate(1)}
      </tr>
      ${getResultGameTemplate(1, 'Speed')}
      ${getResultGameTemplate(1, 'Lives')}
      ${getResultGameTemplate(1, 'Slow')}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${statsData.game1Result.resultTotal}</td>
      </tr>
    </table>`;

    const game2Result = `<table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        <td>
          <ul class="stats">
            ${getResultStats(statsData.game2Result.stats)}
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">${statsData.game2Result.resultTotal}</td>
      </tr>
    </table>`;

    const game3Result = `  <table class="result__table">
        <tr>
          <td class="result__number">3.</td>
          <td colspan="2">
            <ul class="stats">
              ${getResultStats(statsData.game3Result.resultGeneral.stats)}
            </ul>
          </td>
          ${getPointAndTotalTemplate(3)}
        </tr>
        ${getResultGameTemplate(3, 'Lives')}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${statsData.game3Result.resultTotal}</td>
        </tr>
      </table>`;

    const statsElement = `
      ${header}
      <div class="result">
        ${result}
        ${game1Result}
        ${game2Result}
        ${game3Result}
      </div>`;

    return getElementFromTemplate(statsElement);
  };

  const moduleStats = getStatsElement(statsData);

  display(moduleStats);
};

export default showStats;
