import AbstractView from '../abstract-view';
import statsElement from '../templates/stats-element';
import Application from '../application';

class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  getMarkup() {
    return statsElement(this.data);
  }

  bindHandlers() {
    this.element.querySelector('.back').addEventListener('click', () => {
      Application.showGame();
    });
  }
}

export default (data) => new StatsView(data).element;
