
/**
 * demoApp - 1.0.0rc2
 */

angular.module('demoApp', ['ui'], function($locationProvider) {
	$locationProvider.hashPrefix('');
	// Make code pretty
	window.prettyPrint && prettyPrint();
}).value('ui.config', {
	currency: {
		symbol: 'USD $'
	}
}).directive('scrollto', [function(){
  return function(scope, elm, attrs) {
    elm.bind('click', function(e){
      e.preventDefault();
      if (attrs.href) {
        attrs.scrollto = attrs.href;
      }
      var top = $(attrs.scrollto).offset().top;
      $('body').animate({ scrollTop: top }, 800);
    });
  };
}]);

function CodeMirrorCtrl($scope) {
    $scope.codeMirrorModel = "var helloWorld = 'Success!';";
}

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

function ResetCtrl($scope) {
	$scope.resetModel = 'Hover over me';
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
	$scope.keypressCallback = function($event) {
		$event.preventDefault();
		alert('Voila!');
	};
}

function ValidateCtrl($scope) {

  $scope.blackList = ['bad@domain.com','verybad@domain.com'];

  $scope.notBlackListed = function(value) {
    return $scope.blackList.indexOf(value) === -1;
  };

  $scope.repeatedOK = function(value) {
    return $scope.email === value;
  };
}

function ScrollfixCtrl($scope) {
	$scope.scrollfix = -50;
}

function InflectorCtrl($scope) {
	$scope.inflectorText = 'Here Is my_phoneNumber';
	$scope.inflectorType = 'humanize';
}

function UniqueCtrl($scope) {
	$scope.items = [
		{ firstName: 'Dean',	lastName: 'Sofer',	id: 1, gender: 'Male'	},
		{ firstName: 'Dean',	lastName: 'Kuntz',	id: 2, gender: 'Male'	},
		{ firstName: 'Peter',	lastName: 'Piper',	id: 3, gender: 'Female'	},
		{ firstName: 'Peter',	lastName: 'Darwin',	id: 4, gender: 'Male'	},
		{ firstName: 'Janet',	lastName: 'Piper',	id: 5, gender: 'Female'	},
		{ firstName: 'Dan',		lastName: 'Doyon',	id: 6, gender: 'Male'	},
		{ firstName: 'Andy',	lastName: 'Joslin',	id: 1, gender: 'Male'	},
	];
}

function AnimateCtrl($scope) {
  $scope.items = [];
}

function MapCtrl($scope) {
  $scope.myMarkers = [];

  $scope.mapOptions = {
    center: new google.maps.LatLng(35.784, -78.670),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }; 

  $scope.addMarker = function($event) {
    $scope.myMarkers.push(new google.maps.Marker({
      map: $scope.myMap,
      position: $event.latLng
      }));
    };

    $scope.setZoomMessage = function(zoom) {
      $scope.zoomMessage = 'You just zoomed to '+zoom+'!';
      console.log(zoom,'zoomed')
    };

    $scope.openMarkerInfo = function(marker) {
      $scope.currentMarker = marker;
      $scope.currentMarkerLat = marker.getPosition().lat();
      $scope.currentMarkerLng = marker.getPosition().lng();
      $scope.myInfoWindow.open($scope.myMap, marker);
    };

    $scope.setMarkerPosition = function(marker, lat, lng) {
      marker.setPosition(new google.maps.LatLng(lat, lng));
    };
}

function CurrencyCtrl($scope) {
	$scope.nums =  {
		pos : 1000,
		neg : -12345,
		zero: 0
	};
};
/* EOF */