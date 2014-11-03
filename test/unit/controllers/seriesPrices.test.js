'use strict';

describe('Series Prices Controller', function() {
  var ctrl, scope, dialogService, pricesService;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function($rootScope, $q, _dialogService_, _pricesService_, $controller) {
    scope = $rootScope.$new();
    dialogService = _dialogService_;
    pricesService = _pricesService_;
    ctrl = $controller('SeriesPricesCtrl', {$scope: scope, dialogService: _dialogService_, pricesService: _pricesService_ });
  }));

  describe('buyEvent', function(){
    it('should show a confirmation dialog with the event name and chosen price', function(){
      var event = { title: 'My Event', prices: { 'L1': 100}},
        priceLevel = {code: 'L1' };

      spyOn(dialogService, 'confirm');
      scope.buyEvent(event, priceLevel);
      expect(dialogService.confirm).toHaveBeenCalledWith('Are you sure you want to buy My Event for 100?');
    });

    it('should purchase the event if the user selects yes from the confirmation dialog', function(){
      var event = { title: 'My Event', prices: { 'L1': 100}},
        priceLevel = {code: 'L1' };

      spyOn(dialogService, 'confirm').and.returnValue(true);
      spyOn(scope, 'purchaseEvent');

      scope.buyEvent(event, priceLevel);

      expect(scope.purchaseEvent).toHaveBeenCalledWith(event, 100);
    });
  });

  describe('purchaseEvent', function(){
    it('should add the event to the list of purchases', function(){
      var event = { title: 'My Event', prices: { 'L1': 100}},
        price = 100;

      scope.purchaseEvent(event, price);

      var expected = [{ event: event, price: price}];
      expect(scope.purchases).toEqual(expected);
    });
  });
});
