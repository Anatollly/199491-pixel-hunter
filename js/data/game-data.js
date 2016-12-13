export const initialData = {
  timer: 30,
  lives: 3,
  stats: ['unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown'],
};


export const setLives = (data, lives) => {
  if (lives > 3) {
    throw new RangeError('lives > 3');
  }
  if (lives < 0) {
    throw new RangeError('lives < 0');
  }
  return Object.assign({}, data, {lives: lives});
};

export const setTimer = (data, timer) => {
  if (timer > 30) {
    throw new RangeError('timer > 30');
  }
  if (timer < 0) {
    throw new RangeError('timer < 0');
  }
  return Object.assign({}, data, {timer: timer});
};

export const setStats = (data, stats, num) => {
  if (['slow', 'fast', 'correct', 'wrong', 'unknown'].indexOf(stats) === -1) {
    throw new Error('Value shoud be: slow, fast, correct, wrong, unknown');
  }
  data.stats[num] = stats;
  return Object.assign({}, data);
};
