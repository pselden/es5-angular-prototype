var angular = require('angular');

var directives = angular.module('directives', []);
directives.directive('esPriceTable', require('./priceTable'));

module.exports = 'directives';