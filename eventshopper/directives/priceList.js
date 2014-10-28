'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      priceLevels: '=',
      events: '=',
      buyEvent: '='
    },
    templateUrl: 'views/partials/priceList.html'
  };
};
