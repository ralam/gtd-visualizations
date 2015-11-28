(function(){
  if (typeof Display === 'undefined') {
    window.Display = {};
  };

  var AttacksChart = Display.AttacksChart = function (el) {
    this.$chart = el;
  }

  AttacksChart.prototype.render = function(attackTypes) {
    var listOfTypes = Object.keys(attackTypes);
    var attacksCount = []
    for (var key in attackTypes) {
      attacksCount.push(attackTypes[key]);
    }
    this.$chart.highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Attacks by type'
      },
      xAxis: {
        categories: listOfTypes,
        title: {
          text: 'Types of attacks'
        }
      },
      yAxis: {
        title: {
          text: 'Number of attacks'
        }
      },
      series: [{
        name: 'Attacks',
        data: attacksCount
      }],
      credits: {
        enabled: 0
      }
    });
  };
})();
