
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

function EventCtrl($scope) {
	$scope.blurCallback = function(e) {
		alert('Goodbye');
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

function KeypressCtrl($scope) {
	$scope.keypressModel = 'Type something in and hit [Enter]. Remember that this normally adds a new line in textareas';
	$scope.keypressCallback = function(e) {
		alert('You typed: "' + $scope.keypressModel + '"');
	};
}

/* EOF */