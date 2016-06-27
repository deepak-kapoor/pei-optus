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

		it('should change the array when id is found', function() {
			var expectedArray = [{ id: 1, value: 25 }, { id: 2, value: 149 }, { id: 3, value: 75 }];
			dataService.changeValue(2, 99);
			expect(dataService.dataPoints).toEqual(expectedArray);
		});

		it('should not change the array when id is not found', function() {
			var expectedArray = [{ id: 1, value: 25 }, { id: 2, value: 50 }, { id: 3, value: 75 }];
			dataService.changeValue(5, 52);
			expect(dataService.dataPoints).toEqual(expectedArray);
		});

		it('should set the value as zero when computed value is less than zero', function() {
			dataService = new DataService([{id: 1, value: 10}]);
			var expectedArray = [{ id: 1, value: 0 }];
			dataService.changeValue(1, -20);
			expect(dataService.dataPoints).toEqual(expectedArray);
		});

		it('should set the value as zero when computed value is equal to zero', function() {
			dataService = new DataService([{id: 1, value: 10}]);
			var expectedArray = [{ id: 1, value: 0 }];
			dataService.changeValue(1, -10);
			expect(dataService.dataPoints).toEqual(expectedArray);
		});

	});

});