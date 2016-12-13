const getResultStats = (arr) => {
  let a = '';
  for (let i of arr) {
    a += `<li class="stats__result stats__result--${i}"></li>
      `;
  }
  return a.trim();
};

export default getResultStats;
