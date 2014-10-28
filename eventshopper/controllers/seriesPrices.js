'use strict';

const priceLevels = [
  {
    code: 'VIP',
    name: 'VIP Experience'
  },
  {
    code: 'PREM',
    name: 'Premium'
  },
  {
    code: 'L1',
    name: 'Price Level 1'
  },
  {
    code: 'L2',
    name: 'Price Level 2'
  },
  {
    code: 'L3',
    name: 'Price Level 3'
  },
  {
    code: 'L4',
    name: 'Price Level 4'
  }
];

var pages = [];
for(let i = 0; i < 52; ++i){
  pages.push(createPage(i));
}


module.exports = ['$scope', function ($scope) {
  $scope.priceLevels = priceLevels;
  $scope.pages = pages;
  $scope.buyEvent = function(event, priceLevel){
    var price = event.prices[priceLevel.code];
    var yes = confirm(`Are you sure you want to buy ${event.title} for ${price}?`);
    if(yes){
      $scope.purchaseEvent(event, price);
    }
  };

  $scope.purchaseEvent = function(event, price){
    $scope.purchases = $scope.purchases || [];
    $scope.purchases.push({
      event: event,
      price: price
    });
  };
}];


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
