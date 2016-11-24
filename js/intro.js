import getElementFromTemplate from './template';
import showScreen from './display';
import showGreeting from './greeting';

const introElement = `<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
    Sparnaay.</p>
</div>`;

const moduleIntro = getElementFromTemplate(introElement);
const asterisk = moduleIntro.querySelector('.intro__asterisk');

const showIntro = () => {
  showScreen(moduleIntro);
  asterisk.addEventListener('click', () => {
    showGreeting();
  });
};

export default showIntro;
