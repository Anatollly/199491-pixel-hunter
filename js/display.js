const mainElement = document.getElementById('main');

const display = (element) => {
  mainElement.innerHTML = '';
  mainElement.appendChild(element);
};

export default display;
