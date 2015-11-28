(function(){
  if (typeof Display === 'undefined') {
    window.Display = {};
  }

  var MonthsChart = Display.MonthsChart = function (el) {
    this.chart = createChart(el);
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
          name: 'Please select a country using the form',
          data: []
        }, {
          name: 'Please select a country using the form',
          data: []
        }, {
          name: 'Please select a country using the form',
          data: []
        }],
        credits: {
          enabled: 0
        }
    });
    return chart;
  };

  MonthsChart.prototype.update = function(country, year, attacksPerMonth, id){
    var name = '' + country + ' (' + year + ')';
    this.chart.series[id].update({name: name}, false);
    this.chart.series[id].setData(attacksPerMonth);
  };
})();
