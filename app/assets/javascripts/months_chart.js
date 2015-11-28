(function(){
  if (typeof Display === 'undefined') {
    window.Display = {};
  }

  var MonthsChart = Display.MonthsChart = function (el) {
    this.chart = createChart(el);
    this.country1 = "";
    this.country2 = "";
    this.country3 = "";
  };

  var createChart = function (el) {
    var chart = new Highcharts.Chart({
        chart: {
          type: 'line',
          renderTo: el
        },
        title: {
          text: 'Attacks per month'
        },
        xAxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        yAxis: {
          title: {
            text: 'Number of attacks'
          }
        },
        series: [{
          name: 'Attacks in Country 1',
          data: []
        }, {
          name: 'Attacks in Country 2',
          data: []
        }, {
          name: 'Attacks in Country 3',
          data: []
        }],
        credits: {
          enabled: 0
        }
    });
    return chart;
  };

  MonthsChart.prototype.update = function(country, attacksPerMonth, id){
    this.chart.series[id].update({name: country}, false);
    this.chart.series[id].setData(attacksPerMonth);
  };
})();
