'use strict';

describe('Event Details Controller', function() {
  var ctrl, scope, getEventDeferred;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function($q, $rootScope, eventService, $controller) {
    var $stateParams = { eventId: 1};
    scope = $rootScope.$new();
    spyOn(eventService, 'getEvent').andCallFake(function(){
      getEventDeferred = $q.defer();
      return getEventDeferred.promise;
    });

    ctrl = $controller('EventDetailsCtrl', {$scope: scope, $stateParams: $stateParams, eventService: eventService});
  }));

  describe('defaults', function(){
    it('should set purchaseEnabled to true', function(){
      expect(scope.purchaseEnabled).toBe(true);
    });

    it('should set purchaseEnabled to true', function(){
      expect(scope.editEnabled).toBe(true);
    });

    it('should set countdown to an empty object', function(){
      expect(scope.countdown).toEqual({});
    });
  });

  describe('getEvent', function(){
    it('should populate $scope.event when getEvent is resolved', function(){
      var event = {};
      getEventDeferred.resolve(event);
      scope.$apply(); // flush the resolve
      expect(scope.event).toBe(event);
    });

    it('should not populate $scope.event when getEvent is rejected', function(){
      getEventDeferred.reject();
      scope.$apply(); // flush the reject
      expect(scope.event).toBeUndefined();
    });
  });

  it('should set purchaseEnabled and editEnabled to false when timeLeft is 0', function(){
    scope.countdown.timeLeft = 0;
    scope.$apply();
    expect(scope.purchaseEnabled).toBe(false);
    expect(scope.editEnabled).toBe(false);
  });
});
