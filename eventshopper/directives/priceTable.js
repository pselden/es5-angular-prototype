"use strict";

module.exports = function() {
    return {
        restrict: 'E',
        scope: {
            prices: '=prices'
        },
        templateUrl: 'partials/priceTable.html'
    };
};