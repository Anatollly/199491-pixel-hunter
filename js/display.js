const mainElement = document.getElementById('main');

const showScreen = (element) => {
  mainElement.innerHTML = '';
  mainElement.appendChild(element);
};

export default showScreen;
