'use strict';

var isodate = require('isodate');

function getRandom(arr){
    return arr[Math.round(Math.random()*(arr.length-1))];
}

function generatePriceTable(){
    const tags = [
        { text: 'Best Value', color: '#22D269'},
        { text: 'Sold Out', color: '#FB0F1C'},
        { text: 'Few Left', color: '#DEFB36'},
        null,
        null,
        null,
        null,
        null,
        null
    ];

    var tag1 = getRandom(tags);
    var tag2 = getRandom(tags);
    if(tag1 === tag2){ // prevent the same tag being used twice
        tag2 = null;
    }

    return [
        {
            level: 'Super Expensive',
            cost: 999.99,
            tag: tag1
        },
        {
            level: 'Super Cheap',
            cost: 9.99,
            tag: tag2
        }
    ];
}

var eventService = ['$http', '$q',
    function ($http, $q) {
        $http.defaults.headers.common.Accept = 'application/json';
        var infoUrl = 'http://dem.eventshopper.com/info/'; // Load from config

        function getSeriesInfo(seriesCode, lang){
            var result = localStorage.getItem('series:' + seriesCode);
            try {
                if(result){
                    var deferred = $q.defer();
                    result = JSON.parse(result);
                    result.events.forEach((event) => {
                        var dateStr = event.date.replace(' ', 'T') + '-05:00';
                        event.date_str = dateStr;
                        event.date = isodate(dateStr);
                        event.visible = true;
                    });
                    deferred.resolve(result);
                    return deferred.promise;
                }
            } catch(e) {}

            $http.defaults.headers.common.Accept = 'application/json';
            return $http.get(infoUrl + 'showshop.seriesInfoW' + '/' + seriesCode + '/' + lang).then(function(response){
                var data = response.data;
                var seriesInfo = data.result.shift();
                var events = data.result;
                events.sort(function(a, b){
                    if (a.date < b.date)
                        return -1;
                    if (a.date > b.date)
                        return 1;
                    return 0;
                });



                events.forEach((event) => event.priceTable = generatePriceTable());
                var result = {
                    seriesInfo: seriesInfo,
                    events: events
                };

                localStorage.setItem('series:' + seriesCode, JSON.stringify(result));

                events.forEach(function(event){
                    var dateStr = event.date.replace(' ', 'T') + '-05:00';
                    event.date_str = dateStr;
                    event.date = isodate(dateStr);
                    event.visible = true;
                    saveEvent(event);
                });

                return result;
            });
        }

        function getPriceTable(seriesCode, lang){
            var result = localStorage.getItem('pricetable-' + seriesCode);
            if(result){
                var deferred = $q.defer();
                deferred.resolve(JSON.parse(result));
                return deferred.promise;
            }

            return $http.get(infoUrl + 'showshop.priceTableW' + '/' + seriesCode + '/' + lang).then(function(response) {
                var result = response.data;
                localStorage.setItem('pricetable-' + seriesCode, JSON.stringify(result));
                return result;
            });
        }

        function saveEvent(event){
            localStorage.setItem('event-' + event.eventCode, JSON.stringify(event));
        }

        function getEvent(eventCode){
            var deferred = $q.defer();

            setTimeout(function(){
                deferred.resolve(JSON.parse(localStorage.getItem('event-' + eventCode)));
            }, 1); // simulate async

            return deferred.promise;
        }

        // price table code -
            // avails -- separate api calls
            // base availability on max block size vs quantity

        return {
            getSeriesInfo: getSeriesInfo,
            getPriceTable: getPriceTable,
            getEvent: getEvent
        };
    }
];

module.exports = eventService;
