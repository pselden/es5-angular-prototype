'use strict';

// Import npm modules.

var angular = require('angular');
var router = require('angular-ui-router');
var translate = require('./common/translate');

var filters = require('./filters');
var controllers = require('./controllers');
var services = require('./services');
var directives = require('./directives');
var templates = require('./templates');
// Angular App
var app = angular.module('app', [router, translate.name, templates.name, services, controllers, filters, directives]);

app.config(['$urlRouterProvider', '$stateProvider', '$translateProvider', function($urlRouterProvider, $stateProvider, $translateProvider){
  $urlRouterProvider.otherwise('/series');

  $stateProvider
      .state('series', {
        abstract: true,
        url: '/series',
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
        url: '/:eventId',
        templateUrl: 'views/events.details.html',
        controller: 'EventDetailsCtrl'
      });

    $translateProvider.translations('en', {
        series: {
            count: 'This series contains {{events.length}} events',
            title: 'This is a series page -- this shell is common to all series pages.'
        },
        events: {
            title: 'This is an event page -- this shell is common to all event pages.'
        }
    });

    $translateProvider.translations('fr', {
        series: {
            count: 'Cette série contient {{events.length}} événements',
            title: 'C\'est une page de la série - cette coquille est commun à toutes les pages de la série.'
        },
        events: {
            title: 'C\'est une page de l\'événement - cette coquille est commun à toutes les pages de l\'événement.'
        }
    });

    $translateProvider.useStaticFilesLoader({
      prefix: 'translations/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
}]);
