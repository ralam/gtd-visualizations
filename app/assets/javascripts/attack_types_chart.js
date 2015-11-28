(function(){
  if (typeof Display === 'undefined') {
    window.Display = {};
  };

  var AttacksChart = Display.AttacksChart = function (el) {
    this.categories = ['Assassination', 'Hostage Taking (Kidnapping)',
'Bombing/Explosion', 'Facility/Infrastructure Attack', 'Armed Assault', 'Hijacking', 'Unknown', 'Unarmed Assault', 'Hostage Taking (Barricade Incident)'];
    this.chart = createChart(el);

  }

  var createChart = function (el) {
    var categories = this.categories
    var chart = new Highcharts.Chart({
        chart: {
          type: 'column',
          renderTo: el
        },
        title: {
          text: 'Attacks by type'
        },
        xAxis: {
          categories: ['Assassination', 'Hostage Taking (Kidnapping)',
      'Bombing/Explosion', 'Facility/Infrastructure Attack', 'Armed Assault', 'Hijacking', 'Unknown', 'Unarmed Assault', 'Hostage Taking (Barricade Incident)'],
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

  AttacksChart.prototype.update = function(country, year, attacksPerMonth, id){
    var attacksCount = [];
    var name = '' + country + ' (' + year + ')';

    for (var i = 0; i < this.categories.length; i++) {
      var value = 0;

      if (attacksPerMonth[this.categories[i]]) {
        value = attacksPerMonth[this.categories[i]]
      };

      attacksCount.push(value);
    }

    this.chart.series[id].update({name: name}, false);
    this.chart.series[id].setData(attacksCount);
  };
})();
