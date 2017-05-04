import '../../components/intro/intro.view.html';

class IntroController {
  constructor($state) {
    this._$state = $state;
  }

  start() {
    this._$state.go('home');
  }
}

IntroController.$inject = ['$state'];

export { IntroController };
