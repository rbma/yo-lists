'use strict';

/**
 * @ngdoc function
 * @name yoListApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the yoListApp
 */
angular.module('yoListApp')
  .controller('DetailCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
