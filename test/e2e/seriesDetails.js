'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Series Details', function() {
  beforeEach(function() {
    var issCode = 'TrainSeries1';
    browser.get('index.html#/series/' + issCode + '?lang=en');
  });

  it('should show the series title', function(){
    expect(element(by.binding('seriesInfo.title')).getText()).toBe('Train at Nokia Theatre - 2016');
  });
});
