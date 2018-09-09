import IntroHTML from './components/intro/intro.view.html';
import homeHTML from './components/home/home.view.html';
import listHTML from './components/list/list.view.html';

class Router {
  static setup(app) {
    app.config(($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('intro', {
          url: '/',
          template: IntroHTML,
          controller: 'IntroController as ctrl',
        })
        .state('home', {
          url: '/home',
          template: homeHTML,
          controller: 'HomeController as ctrl',
        })
        .state('list', {
          url: '/list/:id',
          params: {
            id: null
          },
          template: listHTML,
          controller: 'ListController as ctrl',
        });
    });
  }
}

export { Router };
