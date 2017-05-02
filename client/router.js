class Router {
  static setup(app) {
    app.config(($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('intro', {
          url: '/',
          templateUrl: 'intro/intro.view.html',
          controller: 'IntroController as ctrl',
        })
        .state('home', {
          url: '/home',
          templateUrl: 'home/home.view.html',
          controller: 'HomeController as ctrl',
        })
        .state('list', {
          url: '/list/:id',
          params: {
            id: null
          },
          templateUrl: 'list/list.view.html',
          controller: 'ListController as ctrl',
        });
    });
  }
}

export { Router };
