(function(){
  if (typeof Display === 'undefined') {
    window.Display = {};
  };

  var SuicidesChart =  Display.SuicidesChart = function (el) {
    this.$chart = el
  };

  SuicidesChart.prototype.render = function (suicides, conventional) {
    this.$chart.highcharts({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Suicide vs. Conventional Attacks'
      },
      plotOptions: {
        pie: {
          showInLegend: true
        }
      },
      series:[{
        name: 'Attacks',
        colorByPoint: true,
        data: [{
          name: 'Suicide attacks',
          y: suicides
        }, {
          name: 'Conventional attacks',
          y: conventional
        }]
      }]
    });
  };
})();
