
/**
 * demoApp - 1.0.0rc2
 */

var demoApp = angular.module('demoApp', [], function($routeProvider) {
});

demoApp.config(function($locationProvider) {  
  $locationProvider.hashPrefix('');
});

/**
 * Tooltip Demo Controller
 */

function TooltipController($scope) {
  $scope.item =  {
    title : 'Title',
    body  : 'Tooltip Body...'
  };
};

/* EOF */