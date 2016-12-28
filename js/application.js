import introView from './screen/intro';
import greetingView from './screen/greeting';
import rulesView from './screen/rules';
import gameView from './screen/game';
import statsView from './screen/stats';
import errorView from './screen/error';
import {displayElement} from './util';
import 'whatwg-fetch';

let questData;

export default class Application {

  static showIntro() {
    displayElement(introView());
  }

  static showGreeting() {
    displayElement(greetingView());
  }

  static showRules() {
    displayElement(rulesView());
  }

  static showGame(user) {
    displayElement(gameView(questData, user));
  }

  static showStats(data) {
    displayElement(statsView(data));
  }

  static showError(error) {
    displayElement(errorView(error));
  }

  static set data(data) {
    questData = data;
  }
}
