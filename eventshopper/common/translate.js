'use strict';

var angular = require('angular');
require('angular-translate');

// from https://github.com/angular-translate/bower-angular-translate-loader-static-files
module.exports = angular.module('pascalprecht.translate').factory('$translateStaticFilesLoader', [
  '$q',
  '$http',
  function ($q, $http) {
    return function (options) {
      if (!options || (!angular.isString(options.prefix) || !angular.isString(options.suffix))) {
        throw new Error('Couldn\'t load static files, no prefix or suffix specified!');
      }
      var deferred = $q.defer();
      $http(angular.extend({
        url: [
          options.prefix,
          options.key,
          options.suffix
        ].join(''),
        method: 'GET',
        params: ''
      }, options.$http)).success(function (data) {
        deferred.resolve(data);
      }).error(function () {
        deferred.reject(options.key);
      });
      return deferred.promise;
    };
  }
]);
