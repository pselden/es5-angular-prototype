'use strict';

describe('Event Details', function() {
  beforeEach(function() {
    var issCode = 'TrainSeries1';
    browser.get('index.html#/series/' + issCode + '?lang=en'); // load this first because we're storing the events in local storage
    browser.get('index.html#/events/NKT151223');
  });

  it('should show the event title', function(){
    var title = element(by.id('eventTitle'));

    expect(title.getText()).toBe('Train on Dec 23, 2015');
  });

  it('should show the correct event header', function(){
    var header = element(by.id('eventsHeader'));

    expect(header.getText()).toEqual('This is an event page -- this shell is common to all event pages.');
  });

  it('should show the correct event header after switching to french', function(){
    var header = element(by.id('eventsHeader'));

    var langSwitcher = element(by.model('selectedLocale'));
    langSwitcher.element(by.css('option[value="fr"]')).click();

    expect(header.getText()).toEqual('C\'est une page de l\'événement - cette coquille est commun à toutes les pages de l\'événement.');
  });

});
