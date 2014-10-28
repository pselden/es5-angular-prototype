var angular = require('angular');

var controllers = angular.module('controllers', []);

controllers.controller('LocaleSwitcherCtrl', require('./localeSwitcher'));

controllers.controller('SeriesDetailsCtrl', require('./seriesDetails'));
controllers.controller('SeriesPricesCtrl', require('./seriesPrices'));

controllers.controller('EventDetailsCtrl', require('./eventDetails'));
controllers.controller('EventInfoCtrl', require('./eventInfo'));
controllers.controller('EventEditorCtrl', require('./eventEditor'));

module.exports = 'controllers';
