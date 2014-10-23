var angular = require('angular');

var controllers = angular.module('controllers', []);

controllers.controller('EventCtrl', require('./event'));
controllers.controller('EventSelectorCtrl', require('./eventSelector'));
controllers.controller('EventInfoCtrl', require('./eventInfo'));
controllers.controller('EventEditorCtrl', require('./eventEditor'));

module.exports = 'controllers';