'use strict';
/*global Showdown:false */


/**
 * @ngdoc function
 * @name yoListApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the yoListApp
 */
angular.module('yoListApp').controller('DetailCtrl', ['$scope', '$routeParams', '$sce', 'contentfulClient', 'list', function ($scope, $routeParams, $sce, contentfulClient, list) {

	var converter = new Showdown.converter();

	$scope.desktop = true;

	//kick off progress
	list.progressInit();

	contentfulClient.entries({'sys.id': $routeParams.listId, 'include': 10}).then(function(data){

		$scope.list = data[0];
		$scope.list.fields.body = converter.makeHtml($scope.list.fields.body);

		//loop through each item and convert to html
		for (var i = 0; i < $scope.list.fields.individualListItems.length; i++){
			$scope.list.fields.individualListItems[i].fields.body = converter.makeHtml($scope.list.fields.individualListItems[i].fields.body);
		}

		list.removeSpinner();


	});

	$scope.trust = function(body){
		return $sce.trustAsHtml(body);
	};



}]);
