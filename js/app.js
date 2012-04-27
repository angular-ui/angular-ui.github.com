
/**
 * demoApp - 1.0.0rc2
 */

var demoApp = angular.module('demoApp', ['ui'], function($routeProvider) {
});

demoApp.config(function($locationProvider) {  
  $locationProvider.hashPrefix('');
  // Make code pretty
  window.prettyPrint && prettyPrint()
});

/**
 * Tooltip Demo Controller
 */

function TooltipCtrl($scope) {
  $scope.item =  {
    title : 'Title',
    body  : 'Tooltip Body...'
  };
};

function LengthCtrl($scope) {
	$scope.items = [
		'First',
		'Second',
		'Third',
		'Fourth',
		'Fifth'
	];
}

/* EOF */