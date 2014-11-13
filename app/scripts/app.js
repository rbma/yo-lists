'use strict';

/**
 * @ngdoc overview
 * @name yoListApp
 * @description
 * # yoListApp
 *
 * Main module of the application.
 */
angular
  .module('yoListApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll',
    'ng-contentful'
  ])
  .config(['$routeProvider', 'contentfulClientProvider', function ($routeProvider, contentfulClientProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/detail/:listId', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    contentfulClientProvider.setSpaceId('6s2rqhmim2vw');
    contentfulClientProvider.setAccessToken('c74b04faaa839cf30d0fbf6d0fa5827984c15b39864d7fc3c48a6fe57ad6ad0d');

  }]);
