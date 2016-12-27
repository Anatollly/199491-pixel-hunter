import introView from './screen/intro';
import greetingView from './screen/greeting';
import rulesView from './screen/rules';
import gameView from './screen/game';
import statsView from './screen/stats';
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

  static showGame() {
    displayElement(gameView(questData));
  }

  static showStats(data) {
    displayElement(statsView(data));
  }

  static set data(data) {
    questData = data;
  }
}
