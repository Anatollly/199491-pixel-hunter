import {getElementFromTemplate} from './util';

export default class AbstractView {

  get element() {
    if (!this._element) {
      this._element = getElementFromTemplate(this.getMarkup());
      this.bindHandlers();
    }
    return this._element;
  }

  getMarkup() {
    throw new Error('Abstract method should be implemented');
  }

  bindHandlers() {
    // By default there is nothing to bind
  }

  clearHandlers() {
    // By default nothing to clear
  }
}
