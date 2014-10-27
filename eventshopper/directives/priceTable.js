"use strict";

module.exports = function() {
    return {
        restrict: 'E',
        scope: {
            prices: '=prices'
        },
        templateUrl: 'views/partials/priceTable.html'
    };
};