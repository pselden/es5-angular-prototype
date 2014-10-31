'use strict';

describe('Locale Switcher Controller', function() {
  var ctrl, scope;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('LocaleSwitcherCtrl', {$scope: scope });
  }));

  describe('defaults', function(){
    it('should set currentLocale to en', function(){
      expect(scope.selectedLocale).toEqual('en');
    });

    it('should set currentLocale to en', function(){
      var expected = [
        {value: 'en', name: 'English'},
        {value: 'fr', name: 'français'},
        {value: 'de', name: 'Deutsch'}
      ];

      expect(scope.supportedLocales).toEqual(expected);
    });
  });
});
