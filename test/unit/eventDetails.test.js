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
    })
    ctrl = $controller('EventDetailsCtrl', {$scope: scope, $stateParams: $stateParams, eventService: eventService});
  }));

  describe('defaults', function(){
    it('should set purchaseEnabled to true', function(){
      expect(scope.purchaseEnabled).toBe(true);
    });

    it('should set purchaseEnabled to true', function(){
      expect(scope.editEnabled).toBe(true);
    });
  });

  describe('getEvent', function(){
    it('should populate $scope.event when getEvent is resolved', function(){
      var event = {};
      getEventDeferred.resolve(event);
      scope.$apply(); // flush the resolve
      expect(scope.event).toEqual(event);
    });

    it('should not populate $scope.event when getEvent is rejected', function(){
      getEventDeferred.reject();
      scope.$apply(); // flush the reject
      expect(scope.event).toBeUndefined();
    });
  });
});
