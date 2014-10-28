var angular = require('angular');

var directives = angular.module('directives', []);
directives.directive('esPriceTable', require('./priceTable'));
directives.directive('esPriceList', require('./priceList'));

module.exports = 'directives';
