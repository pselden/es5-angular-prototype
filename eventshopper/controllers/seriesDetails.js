function groupByWeek(events){
    var pageNum = -1;
    var prevWeek = 0;
    var pages = [];
    for(var i = 0; i < events.length; ++i){
        var event = events[i];
        var week = event.date.getWeekNumber();
        if(prevWeek != week){
            prevWeek = week;
            pageNum++;
        }
        pages[pageNum] = pages[pageNum] || [];
        pages[pageNum].push(event);
    }

    return pages;
}

function setVisibility(event, isVisible){
    if(event) {
        event.visible = isVisible;
    }
}

module.exports = ['$scope', '$stateParams', '$location', 'eventService', function($scope, $stateParams, $location, eventService){
    var query = $location.search();
    var issCode = $stateParams.seriesId;
    var lang = query.lang;

    $scope.pages = [];

    $scope.reset_selection = function(){
        $scope.events.forEach(event => event.visible = false);
    };

    $scope.eventfilter = {};
    $scope.eventfilter.date = null;
    $scope.eventfilter.dow = [
        {'name': 'Sun', 'value': 0, 'selected': true},
        {'name': 'Mon', 'value': 1, 'selected': true},
        {'name': 'Tue', 'value': 2, 'selected': true},
        {'name': 'Wed', 'value': 3, 'selected': true},
        {'name': 'Thu', 'value': 4, 'selected': true},
        {'name': 'Fri', 'value': 5, 'selected': true},
        {'name': 'Sat', 'value': 6, 'selected': true}];

    eventService.getSeriesInfo(issCode, lang).then(data => {
        $scope.seriesInfo = data.seriesInfo;
        $scope.events = data.events;
        $scope.pages = groupByWeek(data.events);
        return eventService.getPriceTable(issCode, lang);
    }).then(function(data){
        console.log('got price table data', data);
    });

    $scope.select_by_date = function() {
        console.log('select_by_date');
        // 0. reset selected attribute to 0 on all events
        // 1. find the first event for the date
        // 2. set the attribute to selected
        // 3. set attribute
        $scope.reset_selection();
        $scope.eventfilter.dow.forEach(function(d){d.selected = false; })
        for(var e=0; e<$scope.events.length; e++) {
            if ($scope.events[e]['date_str'].indexOf($scope.eventfilter.date) != -1) {
                for(var i = e -2; i <= e+2; ++i){
                    setVisibility($scope.events[i], true);
                }
                break;
            }
        }
    };

    $scope.select_by_dow = function() {
        $scope.reset_selection();
        $scope.eventfilter.date = null;
        $scope.events.forEach(function(event){
            var dow = event.date.getDay();
            event.visible = $scope.eventfilter.dow[dow].selected;
        });
    };

    $scope.is_visible = function(){
        return function(evt) {
            return evt.visible
        }
    };
}];