"use strict";

module.exports = ['$scope', '$translate', function($scope, $translate){
    $scope.selectedLocale = 'en';
    $scope.supportedLocales = [
        { value: 'en', name: 'English' },
        { value: 'fr', name: 'français'}
    ];

    $scope.changeLocale = function(){
        console.log($scope.selectedLocale);
        $translate.use($scope.selectedLocale);
    }
}];