import './styles/main.styl';

import { IntroController } from './components/intro/intro.controller.js';
import { HomeController } from './components/home/home.controller.js';
import { ListController } from './components/list/list.controller.js';
import { Router } from './router.js';

var app = angular.module('pokelist', ['ui.router']);

app.factory('httpRequestInterceptor', ($q, $injector) => {
  return {
    'responseError': rejection => {
      $injector.get('$state').transitionTo('home');
      switch (rejection.data.statusText) {
        case 'Gateway Timeout':
          alert('Oops! Seems that Pokemon API is not responding! Try again later.');
          break;
        default:
          alert('Oops! Something went wrong! Try again later.');
      }
      return $q.reject(rejection);
    }
  };
});

app.config(($httpProvider) => {
  $httpProvider.interceptors.push('httpRequestInterceptor');
});

Router.setup(app);

app.controller('IntroController', IntroController);
app.controller('HomeController', HomeController);
app.controller('ListController', ListController);
