(function(){
  if (typeof Display === 'undefined') {
    window.Display = {};
  }

  var MonthsChart = Display.MonthsChart = function (element) {
    this.$chart = element;
  };

  MonthsChart.prototype.render = function (attacksPerMonth) {
    this.$chart.highcharts({
        chart: {
            type: 'line'
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
            name: 'Attacks',
            data: attacksPerMonth
        }]
    });
  };
})();
