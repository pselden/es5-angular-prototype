'use strict';

describe('Series Details', function() {
  beforeEach(function() {
    var issCode = 'TrainSeries1';
    browser.get('index.html#/series/' + issCode + '?lang=en');
  });

  it('should show the series title', function(){
    expect(element(by.binding('seriesInfo.title')).getText()).toBe('Train at Nokia Theatre - 2016');
  });

  it('should show the correct series header', function(){
    var header = element(by.id('seriesHeader'));

    expect(header.getText()).toEqual('This is a series page -- this shell is common to all series pages.');
  });

  it('should load 44 events', function(){
    var events = element.all(by.repeater('event in page | filter:is_visible()'));

    expect(events.count()).toBe(44);
  });

  it('should load 44 events', function(){
    var events = element.all(by.repeater('event in page | filter:is_visible()'));

    expect(events.count()).toBe(44);
  });
});
