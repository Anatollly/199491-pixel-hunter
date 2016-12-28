import AbstractView from '../abstract-view';

class ErrorView extends AbstractView {

  constructor(error) {
    super();
    this.error = error;
  }

  getMarkup() {
    return `
      <div class="end">
        <p>Произошла недопустимая ошибка: ${this.error.message}</p>
      </div>`;
  }

}

export default (error) => new ErrorView(error).element;
