class Router {
  static setup(app) {
    app.config(($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
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
