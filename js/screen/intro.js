import AbstractView from '../abstract-view';
import Application from '../application';

class IntroView extends AbstractView {

  getMarkup() {
    return `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>`;
  }

  bindHandlers() {
    this.element.querySelector('.intro__asterisk').addEventListener('click', () => {
      Application.showGreeting();
    });
  }
}

export default () => new IntroView().element;
