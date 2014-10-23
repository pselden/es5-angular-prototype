var angular = require('angular');

var services = angular.module('services', []);
services.factory('eventService', require('./eventService'));

module.exports = 'services';