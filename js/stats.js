import {displayElement} from './util';
import AbstractView from './abstract-view';
import statsElement from './templates/stats-element';

class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  getMarkup() {
    return statsElement(this.data);
  }
}

export default (data) => {
  displayElement(new StatsView(data).element);
};
