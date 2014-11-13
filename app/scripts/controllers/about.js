'use strict';

/**
 * @ngdoc function
 * @name yoListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoListApp
 */
angular.module('yoListApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
