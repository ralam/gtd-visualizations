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
          name: 'Attacks in Country A',
          data: []
        }, {
          name: 'Attacks in Country B',
          data: []
        }, {
          name: 'Attacks in Country C',
          data: []
        }],
        credits: {
          enabled: 0
        }
    });
    return chart;
  };

  MonthsChart.prototype.updateFirstCountry = function(country, attacksPerMonth){
    this.chart.series[0].update({name: country}, false);
    this.chart.series[0].setData(attacksPerMonth);
  };
})();
