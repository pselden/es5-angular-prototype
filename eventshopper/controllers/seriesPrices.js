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

module.exports = ['$scope', 'dialogService', 'pricesService', function ($scope, dialogService, pricesService) {
  $scope.priceLevels = priceLevels;
  $scope.pages = [];

  pricesService.getPriceTable().then(function(pages){
    $scope.pages = pages;
  });

  $scope.buyEvent = function(event, priceLevel){
    var price = event.prices[priceLevel.code];
    var yes = dialogService.confirm(`Are you sure you want to buy ${event.title} for ${price}?`);
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


