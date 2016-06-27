'use strict';

(function() {

  var dataService = new DataService([{ id: 1, value: 25 }, { id: 2, value: 50 }, { id: 3, value: 75 }]);

  var ractive = new Ractive({
    el: '#container',
    template: '#template',
    data: {
      dataPoints: dataService.dataPoints,
      selectedDataPoint: dataService.dataPoints[0].id,
      getBackgroundColor: function(value) {
        return value >= 100 ? 'red' : '#99BCC8';
      }
    }
  });

  ractive.on('changeDataValue', function(event, delta) {
    var selectedId = this.get('selectedDataPoint');
    this.set('dataPoints', dataService.changeValue(selectedId, delta), { easing: 'easeOut' });
  });
})();
