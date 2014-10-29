'use strict';

module.exports = ['$scope', function ($scope) {
  $scope.user = {};
  $scope.numTickets = 1;

  Object.defineProperty($scope.user, 'fullName', {
    get: function() {
      return `${$scope.user.firstName} ${$scope.user.lastName}`;
    }
  });

  $scope.buyEvent = function buyEvent(){
    alert(`${$scope.user.fullName} just bought ${$scope.numTickets} tickets to ${$scope.event.title}`);
  };
}];
