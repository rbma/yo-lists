'use strict';

/**
 * @ngdoc function
 * @name yoListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoListApp
 */
angular.module('yoListApp').controller('MainCtrl', ['$scope', 'contentfulClient', function ($scope, contentfulClient) {

	$scope.lists = '';

	contentfulClient.entries({'content_type': '1iKCsUgXpSuSouwuMIYACy', 'include': 1}).then(function(data){
		$scope.lists = data;
	});
}]);
