
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
			$('body,html').animate({ scrollTop: top }, 800);
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

function RouteCtrl($scope, $window){
	$scope.sample = "{{ var }}"
	$scope.reload = function($event, route){
		$event.preventDefault();
		$window.location.href = '#route-' + route;
		document.location.reload();
	}
	$scope.routes = [1,2,3];
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
    /* event source that pulls from google.com */
    $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };
    /* event source that contains custom events on the scope */
    $scope.events = [
	  {title: 'All Day Event',start: new Date(y, m, 1)},
	  {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
	  {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
	  {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
	  {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
	  {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth()
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };
    /* alert on eventClick */
    $scope.alertEventOnClick = function( date, allDay, jsEvent, view ){
        $scope.$apply(function(){
          $scope.alertMessage = ('Day Clicked ' + date);
        });
    };
    /* change view from scope 
    *
    *   a calendar object is attached to the scope that the calendar is called from, so that functions can be called at any time to control the calendar.
    */
    $scope.changeView = function(view){
        $scope.calendar.fullCalendar('changeView',view);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1)
          canAdd = 1;
        }
      })
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    }
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    }
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        dayClick: $scope.alertEventOnClick
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
}
/* EOF */
