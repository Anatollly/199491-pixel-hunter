const getResultStats = (obj) => {
  let a = '';
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      a += `<li class="stats__result ${obj[i]}"></li>
        `;
    }
  }
  return a.trim();
};

export default getResultStats;
