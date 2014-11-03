'use strict';

describe('Dialog Service', function() {
  var target;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_dialogService_) {
    target = _dialogService_;
  }));

  describe('confirm', function(){
    it('should call window.confirm with the given message and return the result', function(){
      spyOn(window, 'confirm').and.returnValue(true);

      var actual = target.confirm('hello world');

      expect(window.confirm).toHaveBeenCalledWith('hello world');
      expect(actual).toBe(true);
    });
  });

  describe('alert', function(){
    it('should call window.alert with the given message', function(){
      spyOn(window, 'alert');

      target.alert('hello world');

      expect(window.alert).toHaveBeenCalledWith('hello world');
    });
  });

});
