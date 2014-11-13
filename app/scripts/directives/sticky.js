'use strict';

/**
 * @ngdoc directive
 * @name yoListApp.directive:sticky
 * @description
 * # sticky
 */
angular.module('yoListApp').directive('sticky', function () {

	var link = function($scope, element){

		element.waypoint({
			context: '.frame',
			handler: function(direction){
				if (direction === 'down'){
					element.addClass('sticky');
				}
				else{
					element.removeClass('sticky');
				}

			}
		});

	};

	return {
		link: link
	};
});
