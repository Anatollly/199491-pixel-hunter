import AbstractView from '../abstract-view';
import statsElement from '../templates/stats-element';
import Application from '../application';
import headerBack from '../templates/header-back';

class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  getMarkup() {
    const header = `<header class="header">
      ${headerBack}
    </header>`;
    let stats = '';
    for (let i = this.data.length - 1; i >= 0; i--) {
      stats += `${statsElement(this.data[i])}`;
    }
    return header + stats;
  }

  bindHandlers() {
    this.element.querySelector('.back').addEventListener('click', () => {
      Application.showGame();
    });
  }
}

export default (data) => new StatsView(data).element;
