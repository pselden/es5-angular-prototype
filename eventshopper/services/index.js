var angular = require('angular');

var services = angular.module('services', []);
services.factory('eventService', require('./eventService'));
services.factory('dialogService', require('./dialogService'));
services.factory('pricesService', require('./pricesService'));

module.exports = 'services';
