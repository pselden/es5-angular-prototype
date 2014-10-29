'use strict';

module.exports = ['$scope', '$stateParams', 'eventService', function ($scope, $stateParams, eventService) {
  var eventId = $stateParams.eventId;
  eventService.getEvent(eventId).then(function (event) {
    $scope.event = event;
  });

  $scope.countdown = {};
  $scope.purchaseEnabled = $scope.editEnabled = true;
  $scope.$watch('countdown.timeLeft', (newValue) => {
    if (newValue <= 0) {
      $scope.purchaseEnabled = $scope.editEnabled = false;
    }
  });
}];
