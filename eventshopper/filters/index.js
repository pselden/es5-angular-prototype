var angular = require('angular');

var filters = angular.module('filters', []);
filters.filter('groupByWeek', require('./groupByWeek'));
filters.filter('paginate', require('./paginate'));

module.exports = 'filters';