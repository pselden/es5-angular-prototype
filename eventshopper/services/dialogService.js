'use strict';

var dialogService = [function () {
    function confirm(msg){
      return window.confirm(msg);
    }

    function alert(msg){
      window.alert(msg);
    }

    return {
      confirm: confirm,
      alert: alert
    };
  }
];

module.exports = dialogService;
