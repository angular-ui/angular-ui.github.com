
var app = angular.module('demo', []).controller('DemoCtrl', function($scope) {
    $scope.modules = [
        {
            name: 'Event Binder',
            desc: 'Bind a callback to any event not natively supported by Angular',
            src: 'https://github.com/angular-ui/ui-event',
            home: ''
        },
        {
            name: 'Mask',
            desc: 'Apply a mask on an input field so the user can only type pre-determined pattern.',
            src: 'https://github.com/angular-ui/ui-mask',
            home: ''
        },
        {
            name: 'Indeterminate',
            desc: 'Provides an easy way to toggle a checkbox input\'s special "indeterminate" property. This is a visual toggle only and in no way affects the model or value outside of native browser behavior at this time.',
            src: 'https://github.com/angular-ui/ui-indeterminate',
            home: ''
        },
        {
            name: 'Validate',
            desc: 'General-purpose validator for ngModel.',
            src: 'https://github.com/angular-ui/ui-validate',
            home: ''
        },
        {
            name: 'Scrollpoint',
            desc: 'Add a "ui-scrollpoint" class to elements when the page scrolls past them. (previously known as scrollfix)',
            src: 'https://github.com/angular-ui/ui-scrollpoint',
            home: ''
        },
        {
            name: 'Uploader',
            desc: 'Customizable file uploader',
            src: 'https://github.com/angular-ui/ui-uploader',
            home: ''
        },
        {
            name: 'CodeMirror',
            desc: 'This directive allows you to add CodeMirror editor to your textarea elements.',
            src: 'https://github.com/angular-ui/ui-codemirror',
            home: 'http://angular-ui.github.io/ui-codemirror/'
        },
        {
            name: 'Ace',
            desc: 'This directive allows you to add ACE editor elements.',
            src: 'https://github.com/angular-ui/ui-ace',
            home: 'http://angular-ui.github.io/ui-ace/'
        },
        {
            name: 'Calendar',
            desc: 'A complete AngularJS directive for the Arshaw FullCalendar.',
            src: 'https://github.com/angular-ui/ui-calendar',
            home: 'http://angular-ui.github.io/ui-calendar/'
        },
        {
            name: 'Map',
            desc: 'This directive allows you to add Google Maps Javascript API elements.',
            src: 'https://github.com/angular-ui/ui-map',
            home: 'http://angular-ui.github.io/ui-map/'
        },
        {
            name: 'Date',
            desc: 'jQueryUI Datepicker for AngularJS',
            src: 'https://github.com/angular-ui/ui-date',
            home: 'http://angular-ui.github.io/ui-date/'
        },
        {
            name: 'Select',
            desc: 'AngularJS-native version of Select2 and Selectize',
            src: 'https://github.com/angular-ui/ui-select',
            home: ''
        },
        {
            name: 'TinyMCE',
            desc: 'This directive allows you to add a TinyMCE editor to your form elements.',
            src: 'https://github.com/angular-ui/ui-tinymce',
            home: ''
        },
        {
            name: 'Sortable',
            desc: 'AngularJS bindings for jQuery UI Sortable',
            src: 'https://github.com/angular-ui/ui-sortable',
            home: ''
        },
        {
            name: 'Alias',
            desc: 'Create concise aliases for third-party directives and templates',
            src: 'https://github.com/angular-ui/ui-alias',
            home: ''
        },
        {
            name: 'Bootstrap',
            desc: 'Bootstrap components written in pure AngularJS',
            src: 'https://github.com/angular-ui/bootstrap',
            home: 'http://angular-ui.github.io/bootstrap/'
        },
        {
            name: 'Grid',
            desc: 'Grid virtualization written natively in AngularJS',
            src: 'https://github.com/angular-ui/ng-grid',
            home: 'http://ui-grid.info/'
        },
        {
            name: 'Router',
            desc: 'The de-facto solution to flexible routing with nested views in AngularJS',
            src: 'https://github.com/angular-ui/ui-router',
            home: 'http://angular-ui.github.io/ui-router/site/'
        },
        {
            name: 'Google maps',
            desc: 'AngularJS directives for the Google Maps Javascript API',
            src: 'https://github.com/angular-ui/angular-google-maps',
            home: 'http://angular-ui.github.io/angular-google-maps'
        }
    ];

});
