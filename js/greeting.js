import getElementFromTemplate from './template';
import display from './display';
import showRules from './rules';

const greetingData = {
  header: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
  rules: `<p>Правила игры просты.<br>
    Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
    Задача кажется тривиальной, но не думай, что все так просто.<br>
    Фотореализм обманчив и коварен.<br>
    Помни, главное — смотреть очень внимательно.</p>`
};

const getGreetingElement = (data) => {
  const greetingElement = `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${greetingData.header}</h3>
      ${greetingData.rules}
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

  return getElementFromTemplate(greetingElement);
};

const moduleGreeting = getGreetingElement(greetingData);
const arrow = moduleGreeting.querySelector('.greeting__continue');

const showGreeting = () => {
  display(moduleGreeting);
  arrow.addEventListener('click', () => {
    showRules();
  });
};

export default showGreeting;
