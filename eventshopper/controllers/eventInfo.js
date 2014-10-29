module.exports = ['$scope', '$interval', function($scope, $interval){
    $scope.countdown.timeLeft = 60;
    $interval(function(){
        $scope.countdown.timeLeft = $scope.countdown.timeLeft - 1;
    }, 1000);
}];
