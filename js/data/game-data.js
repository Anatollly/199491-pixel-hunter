export const initialState = {
  timer: 30,
  lives: 3,
  stats: ['unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown'],
  currentLevel: 0,
};


export const setLives = (data, lives) => {
  if (lives > initialState.lives) {
    throw new RangeError(`lives > ${initialState.lives}`);
  }
  if (lives < 0) {
    throw new RangeError('lives < 0');
  }
  const copiedObject = Object.assign({}, data, {lives: lives});
  return copiedObject;
};

export const setTimer = (data, timer) => {
  if (timer > initialState.timer) {
    throw new RangeError(`timer > ${initialState.timer}`);
  }
  if (timer < 0) {
    throw new RangeError('timer < 0');
  }
  const copiedObject = Object.assign({}, data, {timer: timer});
  return copiedObject;
};

export const setStats = (data, stats, num) => {
  const arrStats = ['slow', 'fast', 'correct', 'wrong', 'unknown'];
  if (arrStats.includes(stats) === false) {
    throw new Error(`Value should be: ${arrStats}`);
  }
  const copiedArr = data.stats.slice();
  copiedArr[num] = stats;
  const copiedObject = Object.assign({}, data);
  copiedObject.stats = copiedArr;
  if (data.stats === copiedObject.stats) {
    throw new Error('Array of the object should be a copied');
  }
  return copiedObject;
};

export const setLevel = (data, level) => {
  if (level < 0) {
    throw new RangeError('level < 0');
  }
  const copiedObject = Object.assign({}, data, {currentLevel: level});
  return copiedObject;
};
