
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
	$scope.blurCallback = function() {
		alert('Goodbye');
	};
};

function ModalCtrl($scope) {
  $scope.modalShown = false;
}

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
	$scope.keypressCallback = function() {
		alert('Voila!');
	};
}

function ScrollfixCtrl($scope) {
	$scope.scrollfix = -50;
}

function UniqueCtrl($scope) {
	$scope.items = [
		{ firstName: 'Dean', lastName: 'Sofer', id: 1, gender: 'Male' },
		{ firstName: 'Dean', lastName: 'Kuntz', id: 2, gender: 'Male' },
		{ firstName: 'Peter', lastName: 'Piper', id: 3, gender: 'Female' },
		{ firstName: 'Peter', lastName: 'Darwin', id: 4, gender: 'Male' },
		{ firstName: 'Janet', lastName: 'Piper', id: 5, gender: 'Female' },
		{ firstName: 'Dan', lastName: 'Doyon', id: 6, gender: 'Male' },
		{ firstName: 'Andy', lastName: 'Joslin', id: 1, gender: 'Male' },
	];
}

/* EOF */