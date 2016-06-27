'use strict';

describe('app', function() {

	describe('DataService', function() {
		var dataService;

		beforeEach(function() {
			dataService = new DataService([{ id: 1, value: 25 }, { id: 2, value: 50 }, { id: 3, value: 75 }]);
		});

		it('should have dataPoints defined', function() {
			expect(dataService.dataPoints).toBeDefined();
		});

		it('dataPoints should be an array', function() {
			expect(_.isArray(dataService.dataPoints)).toBe(true);
		});

		it('should have changeValue defined', function() {
			expect(dataService.changeValue).toBeDefined();
		});

		it('should change the value when id is found', function() {

		});

	});

});