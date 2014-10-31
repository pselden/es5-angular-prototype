'use strict';

describe('Event Info Controller', function() {
  var ctrl, scope, interval;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function($rootScope, $interval, $controller) {
    scope = $rootScope.$new();
    scope.countdown = {};
    interval = $interval;
    ctrl = $controller('EventInfoCtrl', {$scope: scope, $interval: interval});
  }));

  describe('defaults', function(){
    it('should set countdown.timeLeft to 60 seconds', function(){
      expect(scope.countdown.timeLeft).toEqual(60);
    });
  });

  describe('timeLeft interval', function(){
    it('should decrease timeLeft by 1 when the interval elapses',function(){
      interval.flush(1000);
      expect(scope.countdown.timeLeft).toEqual(59);
    });
  });
});
