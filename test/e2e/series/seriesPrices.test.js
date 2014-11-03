'use strict';

describe('Series Prices', function() {
  beforeEach(function() {
    browser.get('/#/series/TRA2012/prices');
  });

  it('should show the correct series header', function(){
    var header = element(by.id('seriesHeader'));

    expect(header.getText()).toEqual('This is a series page -- this shell is common to all series pages.');
  });

  it('should show prices for a year of events', function(){
    var events = element.all(by.css('.event--date'));

    expect(events.count()).toBe(364);
  });

  it('should show prices for a year of events', function(){
    var events = element.all(by.css('.event--date'));

    expect(events.count()).toBe(364);
  });

  it('should show the event price in the list', function(){
    var price = element(by.css('.event--price'));

    expect(price.getText()).toEqual('USD$200.00');
  });

  it('should show the event price in the list', function(){
    var price = element(by.css('.event--price'));

    price.click();

    var confirm = browser.switchTo().alert();
    confirm.accept();

    var purchases = element(by.id('purchases')).all(by.css('li'));

    expect(purchases.count()).toBe(1);
    expect(purchases.get(0).getText()).toMatch(/You bought AmaLuna on .* for \$200\.00/);
  });
});
