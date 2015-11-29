(function(){
  if (typeof Display === 'undefined') {
    window.Display = {};
  };

  var SuicidesChart =  Display.SuicidesChart = function (el) {
    this.chart = createChart(el);
  };

  var createChart = function (el) {
    var chart = new Highcharts.Chart({
      chart: {
        type: 'pie',
        renderTo: el
      },
      title: {
        text: 'Conventional vs. Suicide Attacks',
      },
      subtitle: {
        text: 'Please select a country above'
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
          y: 1
        }, {
          name: 'Conventional attacks',
          y: 1
        }]
      }],
      credits: {
        enabled: 0
      }
    });
    return chart;
  };

  SuicidesChart.prototype.update = function (country, year, suicides, conventional) {
    var name = country + ' (' + year + ')';
    var data = [
        {name: 'Suicide attacks', y: suicides},
        {name: 'Conventional attacks', y: conventional}
      ];
    this.chart.setTitle(
      {text: 'Conventional vs. Suicide Attacks'},
      {text: name}
    );
    this.chart.series[0].setData(data);
  };
})();
