// Import npm modules.

var angular = require('angular');
var router = require('angular-ui-router');

var filters = require('./filters');
var controllers = require('./controllers');
var services = require('./services');

// Angular App
var app = angular.module('app', [router, services, controllers, filters]);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('index', {
        url: "/",
        templateUrl: 'views/eventSelector.html',
        controller: 'EventSelectorCtrl'
      })
      .state('events', {
          url: '/events',
          abstract: true,
          templateUrl: 'index.html'
      })
      .state('events.details', {
        url: "/:eventId",
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      });
}]);