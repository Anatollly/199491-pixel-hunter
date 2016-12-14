export const getElementFromTemplate = (nodeElement) => {
  let node = document.createElement('span');
  let trimElement = nodeElement.trim();
  node.innerHTML = trimElement;
  return node;
};

const mainElement = document.getElementById('main');

export const displayElement = (element) => {
  mainElement.innerHTML = '';
  mainElement.appendChild(element);
};

export const getResultStats = (arr) => {
  let a = '';
  for (let i of arr) {
    a += `<li class="stats__result stats__result--${i}"></li>
      `;
  }
  return a.trim();
};
