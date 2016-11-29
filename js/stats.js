import getElementFromTemplate from './template';
import display from './display';
import getResultStats from './resultStats';

const statsData = {
  result: 'Победа!',
  game1Result: {
    resultGeneral: {
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
        result10: 'stats__result--unknown'
      },
      points: '100',
      total: '900'
    },
    resultSpeed: {
      sum: '1',
      points: '50',
      total: '50'
    },
    resultLives: {
      sum: '2',
      points: '50',
      total: '100'
    },
    resultSlow: {
      sum: '2',
      points: '50',
      total: '-100'
    },
    resultTotal: '950'
  },
  game2Result: {
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
      result10: 'stats__result--unknown'
    },
    resultTotal: 'fail'
  },
  game3Result: {
    resultGeneral: {
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
        result10: 'stats__result--unknown'
      },
      points: '100',
      total: '900'
    },
    resultLives: {
      sum: '2',
      points: '50',
      total: '100'
    },
    resultTotal: 950
  }
};

const header = `<header class="header">
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
</header>`;

const result = `<h1>${statsData.result}</h1>`;

const game1Result = `<table class="result__table">
  <tr>
    <td class="result__number">1.</td>
    <td colspan="2">
      <ul class="stats">
        ${getResultStats(statsData.game1Result.resultGeneral.stats)}
      </ul>
    </td>
    <td class="result__points">×&nbsp;${statsData.game1Result.resultGeneral.points}</td>
    <td class="result__total">${statsData.game1Result.resultGeneral.total}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${statsData.game1Result.resultSpeed.sum}&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;${statsData.game1Result.resultSpeed.points}</td>
    <td class="result__total">${statsData.game1Result.resultSpeed.total}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${statsData.game1Result.resultLives.sum}&nbsp;<span class="stats__result stats__result--heart"></span></td>
    <td class="result__points">×&nbsp;${statsData.game1Result.resultLives.points}</td>
    <td class="result__total">${statsData.game1Result.resultLives.total}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">${statsData.game1Result.resultSlow.sum}&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;${statsData.game1Result.resultSlow.points}</td>
    <td class="result__total">${statsData.game1Result.resultSlow.total}</td>
  </tr>
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
      <td class="result__points">×&nbsp;${statsData.game3Result.resultGeneral.points}</td>
      <td class="result__total">${statsData.game3Result.resultGeneral.total}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">${statsData.game3Result.resultLives.sum}&nbsp;<span class="stats__result stats__result--heart"></span></td>
      <td class="result__points">×&nbsp;${statsData.game3Result.resultLives.points}</td>
      <td class="result__total">${statsData.game3Result.resultLives.total}</td>
    </tr>
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

const moduleStats = getElementFromTemplate(statsElement);

const showStats = () => {
  display(moduleStats);
};

export default showStats;
