
var app = angular.module('demo', []).controller('DemoCtrl', function($scope) {
    $scope.modules = [
        {
            name: 'Event Binder',
            desc: 'Bind a callback to any event not natively supported by AngularJS',
            src: 'https://github.com/angular-ui/ui-event',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-event/master/demo/index.html'
        },
        {
            name: 'Mask',
            desc: 'Apply a mask on an input field so the user can only type pre-determined pattern.',
            src: 'https://github.com/angular-ui/ui-mask',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-mask/master/demo/index.html'
        },
        {
            name: 'Indeterminate',
            desc: 'Provides an easy way to toggle a checkbox input\'s special "indeterminate" property. This is a visual toggle only and in no way affects the model or value outside of native browser behavior at this time.',
            src: 'https://github.com/angular-ui/ui-indeterminate',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-indeterminate/master/demo/index.html'
        },
        {
            name: 'Validate',
            desc: 'General-purpose validator for ngModel.',
            src: 'https://github.com/angular-ui/ui-validate',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-validate/master/demo/index.html'
        },
        {
            name: 'Scrollpoint',
            desc: 'Add a "ui-scrollpoint" class to elements when the page scrolls past them. (previously known as scrollfix)',
            src: 'https://github.com/angular-ui/ui-scrollpoint',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-scrollpoint/master/demo/index.html'
        },
        {
            name: 'Uploader',
            desc: 'Customizable file uploader',
            src: 'https://github.com/angular-ui/ui-uploader',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-uploader/master/demo/index.html'
        },
        {
            name: 'CodeMirror',
            desc: 'This directive allows you to add CodeMirror editor to your textarea elements.',
            src: 'https://github.com/angular-ui/ui-codemirror',
            home: 'https://angular-ui.github.io/ui-codemirror/'
        },
        {
            name: 'Ace',
            desc: 'This directive allows you to add ACE editor elements.',
            src: 'https://github.com/angular-ui/ui-ace',
            home: 'https://angular-ui.github.io/ui-ace/'
        },
        {
            name: 'Calendar',
            desc: 'A complete AngularJS directive for the Arshaw FullCalendar.',
            src: 'https://github.com/angular-ui/ui-calendar',
            home: 'https://angular-ui.github.io/ui-calendar/'
        },
        {
            name: 'Map',
            desc: 'This directive allows you to add Google Maps Javascript API elements.',
            src: 'https://github.com/angular-ui/ui-map',
            home: 'http://angular-ui.github.io/ui-map/'
        },
        {
            name: 'Date',
            desc: 'jQuery UI Datepicker for AngularJS',
            src: 'https://github.com/angular-ui/ui-date',
            home: 'https://angular-ui.github.io/ui-date/'
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
            desc: 'jQuery UI Sortable for AngularJS',
            src: 'https://github.com/angular-ui/ui-sortable',
            home: 'https://angular-ui.github.io/ui-sortable/'
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
            home: 'https://angular-ui.github.io/bootstrap/'
        },
        {
            name: 'Grid',
            desc: 'Grid virtualization written natively in AngularJS',
            src: 'https://github.com/angular-ui/ui-grid',
            home: 'http://ui-grid.info/'
        },
        {
            name: 'Router',
            desc: 'The de-facto solution to flexible routing with nested views in AngularJS',
            src: 'https://github.com/angular-ui/ui-router',
            home: 'https://angular-ui.github.io/ui-router/site/'
        },
        {
            name: 'Google maps',
            desc: 'AngularJS directives for the Google Maps Javascript API',
            src: 'https://github.com/angular-ui/angular-google-maps',
            home: 'https://angular-ui.github.io/angular-google-maps'
        },
        {
            name: 'Slider',
            desc: 'jQuery UI Slider for AngularJS',
            src: 'https://github.com/angular-ui/ui-slider',
            home: 'https://angular-ui.github.io/ui-slider/demo/demo.html'
        },
        {
            name: 'Layout',
            desc: 'This directive allows you to split stuff',
            src: 'https://github.com/angular-ui/ui-layout',
            home: 'https://angular-ui.github.io/ui-layout/'
        },
        {
            name: 'Chart with jQplot',
            desc: 'This directive allows you to add a jqPlot graph to your application',
            src: 'https://github.com/angular-ui/ui-chart',
            home: 'https://angular-ui.github.io/ui-chart'
        },
        {
            name: 'Tour',
            desc: 'A native tour-type directive that will lace easily-controllable tooltips throughout your app',
            src: 'https://github.com/angular-ui/ui-tour',
            home: 'https://angular-ui.github.io/ui-tour/demo/demo.html'
        },
        {
            name: 'Scroll',
            desc: 'uiScroll directive solves this problem by dynamically destroying elements as they become invisible and recreating them if they become visible again',
            src: 'https://github.com/angular-ui/ui-scroll',
            home: 'http://angular-ui.github.io/ui-scroll/demo/'
        },
        {
            name: 'Mention',
            desc: 'Facebook-like @mentions for text inputs built around composability',
            src: 'https://github.com/angular-ui/ui-mention',
            home: 'http://angular-ui.github.io/ui-mention/example/'
        }
    ];

});
