'use strict';

module.exports = ['$scope', '$translate', 'tmhDynamicLocale', function ($scope, $translate, tmhDynamicLocale) {
  $scope.selectedLocale = 'en';
  $scope.supportedLocales = [
    {value: 'en', name: 'English'},
    {value: 'fr', name: 'français'},
    {value: 'de', name: 'Deutsch'}
  ];

  $scope.changeLocale = function () {
    $translate.use($scope.selectedLocale);
    tmhDynamicLocale.set($scope.selectedLocale);
  };
}];
