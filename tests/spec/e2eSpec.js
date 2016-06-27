// jshint ignore: start
'use strict';

describe('Optus PEI End to End Test', function() {
  var progressBarSelector;
  var btnChangeValueMinusTwentyFive;
  var btnChangeValueMinusTen;
  var btnChangeValueTen;
  var btnChangeValueTwentyFive;
  var progressBarOne;
  var progressBarTwo;
  var progressBarThree;
  var progressBarThreeInternalBar;
  var baseUrl = 'http://kapoor.io/pei-optus'

  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get(baseUrl);
    progressBarSelector = element(by.id('progressBarSelector'));
    btnChangeValueMinusTwentyFive = element(by.id('btnChangeValueMinusTwentyFive'));
    btnChangeValueMinusTen = element(by.id('btnChangeValueMinusTen'));
    btnChangeValueTen = element(by.id('btnChangeValueTen'));
    btnChangeValueTwentyFive = element(by.id('btnChangeValueTwentyFive'));
    progressBarOne = element(by.css('#container > div:nth-child(1)'));
    progressBarTwo = element(by.css('#container > div:nth-child(2)'));
    progressBarThree = element(by.css('#container > div:nth-child(3)'));
    progressBarThreeInternalBar = element(by.css('#container > div:nth-child(3) > div'));

  })

  describe('Elements', function() {

    it('should have a select element for progress Bars', function() {
      expect(progressBarSelector.isDisplayed()).toBeTruthy();
    });

    it('should have a button to decrease value by 25', function() {
    	expect(btnChangeValueMinusTwentyFive.isDisplayed()).toBeTruthy();
    });

    it('should have a button to decrease value by 10', function() {
    	expect(btnChangeValueMinusTen.isDisplayed()).toBeTruthy();
    });

    it('should have a button to increase value by 10', function() {
    	expect(btnChangeValueTen.isDisplayed()).toBeTruthy();
    });

    it('should have a button to increase value by 25', function() {
    	expect(btnChangeValueTwentyFive.isDisplayed()).toBeTruthy();
    });

    it('should display all 3 progress bars', function() {
    	expect(progressBarOne.isDisplayed()).toBeTruthy();
    	expect(progressBarTwo.isDisplayed()).toBeTruthy();
    	expect(progressBarThree.isDisplayed()).toBeTruthy();
    });

  });

  describe('Interactions', function() {

  	it('should select first progress bar when page is loaded', function() {
  		btnChangeValueMinusTwentyFive.click();
  		expect(progressBarOne.getText()).toEqual('0%');
  	});

  	it('should select second progress bar when second option in dropdown is clicked', function() {
  		element(by.cssContainingText('option', '#progress 2')).click();
  		btnChangeValueTwentyFive.click();
  		expect(progressBarTwo.getText()).toEqual('75%');
  	});

  	it('should select second progress bar when second option in dropdown is clicked', function() {
  		element(by.cssContainingText('option', '#progress 3')).click();
  		btnChangeValueMinusTwentyFive.click();
  		expect(progressBarThree.getText()).toEqual('50%');
  	});

  	it('should change color to red when value is 100', function() {
  		element(by.cssContainingText('option', '#progress 3')).click();
  		btnChangeValueTwentyFive.click();
  		expect(progressBarThree.getText()).toEqual('100%');
  		progressBarThreeInternalBar.getCssValue("background-color")
  			.then(function(style) {
  				console.log(style);
  				expect(style).toEqual('rgba(255, 0, 0, 1)');
  			})
  	});

  	it('should change color to red when value is greater than 100', function() {
  		element(by.cssContainingText('option', '#progress 3')).click();
  		btnChangeValueTwentyFive.click();
  		btnChangeValueTen.click();
  		expect(progressBarThree.getText()).toEqual('110%');
  		progressBarThreeInternalBar.getCssValue("background-color")
  			.then(function(style) {
  				console.log(style);
  				expect(style).toEqual('rgba(255, 0, 0, 1)');
  			})
  	});

  })

});
