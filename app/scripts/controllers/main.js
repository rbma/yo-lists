'use strict';

/**
 * @ngdoc function
 * @name yoListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoListApp
 */
angular.module('yoListApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
