var angular = require('angular');

var directives = angular.module('directives', []);
directives.directive('priceTable', require('./priceTable'));

module.exports = 'filters';