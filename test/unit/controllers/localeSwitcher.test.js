'use strict';

describe('Locale Switcher Controller', function() {
  var ctrl, scope, translate, dynamicLocale;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function($rootScope, $translate, tmhDynamicLocale, $controller) {
    scope = $rootScope.$new();
    translate = $translate;
    dynamicLocale = tmhDynamicLocale;
    ctrl = $controller('LocaleSwitcherCtrl', {$scope: scope, $translate: translate, tmhDynamicLocale: dynamicLocale });
  }));

  describe('defaults', function(){
    it('should set currentLocale to en', function(){
      expect(scope.selectedLocale).toEqual('en');
    });

    it('should set supported locales', function(){
      var expected = [
        {value: 'en', name: 'English'},
        {value: 'fr', name: 'français'},
        {value: 'de', name: 'Deutsch'}
      ];

      expect(scope.supportedLocales).toEqual(expected);
    });
  });

  describe('changeLocale', function(){
    it('should change the locale for the translate and locale modules', function(){
      spyOn(translate, 'use');
      spyOn(dynamicLocale, 'set');

      scope.selectedLocale = 'de';
      scope.changeLocale();

      expect(translate.use).toHaveBeenCalledWith('de');
      expect(dynamicLocale.set).toHaveBeenCalledWith('de');
    });
  });
});
