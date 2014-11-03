'use strict';

function getPages(){
  var pages = [];
  for(let i = 0; i < 52; ++i){
    pages.push(createPage(i));
  }

  return pages;
}

function createPage(weekOffset){
  const events = [];
  for(let i = 0; i < 7; ++i){
    events.push(createEvent(weekOffset, i));
  }
  return events;
}

function createEvent(weekOffset, dayOffset){
  var date = new Date();
  date.setDate(date.getDate() + (weekOffset * 7) + dayOffset);
  return {
    title: 'AmaLuna',
    date: date,
    prices: {
      'VIP': 200.00,
      'PREM': 120.00,
      'L1': 90,
      'L2': 70,
      'L3': 50,
      'L4': 35
    }
  };
}

var pricesService = ['$q', function ($q) {
    function getPriceTable(){
      var deferred = $q.defer();
      deferred.resolve(getPages());
      return deferred.promise;
    }

    return {
      getPriceTable: getPriceTable
    };
  }
];

module.exports = pricesService;
