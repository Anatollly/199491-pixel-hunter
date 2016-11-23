import moduleIntro from './intro';
import moduleGreeting from './greeting';
import moduleRules from './rules';
import moduleGame1 from './game-1';
import moduleGame2 from './game-2';
import moduleGame3 from './game-3';
import moduleStats from './stats';

(function () {

  // Rules
  let rulesElement = moduleRules;
  let rulesSubmit = rulesElement.querySelector('.rules__button');
  let rulesInput = rulesElement.querySelector('.rules__input');

  rulesInput.oninput = () => {
    if (rulesInput.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  let mainElement = document.getElementById('main');
  let centralElement = document.querySelector('.central');
  let footerElement = document.querySelector('.footer');

  let switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  centralElement.insertBefore(switcher, footerElement);

  let slides = [
    moduleIntro,
    moduleGreeting,
    rulesElement,
    moduleGame1,
    moduleGame2,
    moduleGame3,
    moduleStats
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
})();
