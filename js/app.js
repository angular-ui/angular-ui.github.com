
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

function MainCtrl($scope, $http, orderByFilter) {
  var url = "http://50.116.42.77:3001";
  $scope.selectedModules = [];
  //iFrame for downloading
  var $iframe = $("<iframe>").css('display','none').appendTo(document.body);

  $scope.showBuildModal = function() {
    $scope.buildModalShown = true;
    //Load modules if they aren't loaded yet
    if (!$scope.modules) {
      $http.get(url + "/api/angular-ui").then(function(response) {
        $scope.modules = response.data.modules;
      }, function() {
        $scope.buildGetErrorText = "Error retrieving build files from server.";
      });
    }
  };

  $scope.downloadBuild = function() {
    var downloadUrl = url + "/api/angular-ui/download?";
    angular.forEach($scope.selectedModules, function(module) {
      downloadUrl += "modules=" + module + "&";
    });
    $iframe.attr('src','');
    $iframe.attr('src', downloadUrl);
    $scope.buildModalShown = false;
  };
}

function CodeMirrorCtrl($scope) {
	$scope.codeMirrorModel = "var helloWorld = 'Success!';";
}

function TooltipCtrl($scope) {
	$scope.item =  {
		title : 'Title',
		body  : 'Tooltip Body...'
	};
}

function EventCtrl($scope) {
	$scope.blurCallback = function() {
		alert('Goodbye');
	};
}

function ModalCtrl($scope) {
	$scope.modalShown = false;
}

function ResetCtrl($scope) {
	$scope.resetModel = 'Hover over me';
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
}

function SortableCtrl($scope) {
	$scope.parents = [
		{ name: 'Anna', children: ['Alvin', 'Becky' ,'Charlie'] },
		{ name: 'Barney', children: ['Dorothy', 'Eric'] },
		{ name: 'Chris', children: ['Frank', 'Gary', 'Henry'] }
	];
	$scope.items = ['One', 'Two', 'Three'];
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
	{ firstName: 'Andy',	lastName: 'Joslin',	id: 1, gender: 'Male'	}
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
		console.log(zoom,'zoomed');
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
}

function FormatCtrl($scope) {
	$scope.sentence = 'Hello :name, how is the :subject? Are you on the $0, $1 or $2?';
	$scope.mode = 'string';
	$scope.tokens = {
		'string': 'Single',
		'array': ['first', 'second', 'third'],
		'object': {
			'name': 'Bob',
			'subject': 'wife'
		}
	};
}

function CalendarCtrl($scope) {
	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    $scope.events = [
	  {title: 'All Day Event',start: new Date(y, m, 1)},
	  {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
	  {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
	  {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
	  {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
	  {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ]

    $scope.addChild = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29)
      });
    }

    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    }
}
/* EOF */
