'use strict';
/* global $:false */

/**
 * @ngdoc service
 * @name yoListApp.list
 * @description
 * # list
 * Factory in the yoListApp.
 */
angular.module('yoListApp').factory('list', ['ngProgress', function (ngProgress) {
    // Service logic

    var progressInit = function(){

      ngProgress.height('10px');
      ngProgress.color('#ffffff');
      ngProgress.start();
    };

    var removeSpinner = function(){
      ngProgress.complete();
      
      $('#spinner').animate({
        opacity: 0
      },600,function(){
        $('#spinner').remove();
      }
      );
    };



    // Public API here
    return {
      progressInit: function(){
        progressInit();
      },

      removeSpinner: function(){
        removeSpinner();
      }

    };
  }]);
