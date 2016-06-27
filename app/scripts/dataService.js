'use strict';

var _changeValue = function(id, change) {
  var index = this.dataPoints.findIndex(function(element /*, index, array */ ) {
    return element.id === id;
  });
  if (index >= 0) {
    var newValue = this.dataPoints[index].value + (change);
    if (newValue <= 0) {
      this.dataPoints[index].value = 0;
    } else {
      this.dataPoints[index].value = newValue;
    }
  }
  return this.dataPoints;
};

function DataService(values) { // jshint ignore:line
	this.dataPoints = values;
	this.changeValue = _changeValue;
}
