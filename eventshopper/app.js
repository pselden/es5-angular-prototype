// Import npm modules.

var angular = require('angular');
var router = require('angular-ui-router');

var filters = require('./filters');
var controllers = require('./controllers');
var services = require('./services');
var directives = require('./directives');

// Angular App
var app = angular.module('app', [router, services, controllers, filters, directives]);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/series');

  $stateProvider
      .state('series', {
        abstract: true,
        url: "/series",
        views: {
            layout: {
                templateUrl: 'views/series.html'
            }
        }
      })
      .state('series.details', {
        url: '/:seriesId',
        templateUrl: 'views/series.detail.html',
        controller: 'SeriesDetailsCtrl'
      })
      .state('events', {
          url: '/events',
          abstract: true,
          views: {
              layout: {
                  templateUrl: 'views/events.html'
              }
          }
      })
      .state('events.details', {
        url: "/:eventId",
        templateUrl: 'views/events.details.html',
        controller: 'EventDetailsCtrl'
      });
}]);