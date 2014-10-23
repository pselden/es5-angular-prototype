module.exports = ['$scope', '$interval', function($scope, $interval){
    $scope.countdown.timeLeft = 30;
    $interval(function(){
        $scope.countdown.timeLeft = $scope.countdown.timeLeft - 1;
        if($scope.countdown.timeLeft === 0){
            $scope.event.title = 'Timed out!';
        }
    }, 1000);
}];
