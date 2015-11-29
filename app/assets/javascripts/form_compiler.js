(function() {
  if (typeof Display === 'undefined') {
    window.Display = {};
  };

  var FormParser = Display.FormParser = function (monthsEl, attacksEl, firstPie, secondPie, thirdPie) {
    this.monthsChart = new window.Display.MonthsChart(monthsEl);
    this.attacksChart = new window.Display.AttacksChart(attacksEl);
    this.suicidesChart1 = new window.Display.SuicidesChart(firstPie);
    this.suicidesChart2 = new window.Display.SuicidesChart(secondPie);
    this.suicidesChart3 = new window.Display.SuicidesChart(thirdPie);
  };

  FormParser.prototype.handleSubmit = function() {
    $('form').on('submit', function(e){
      e.preventDefault();
      var formData = $(event.currentTarget).serializeJSON();
      var formId = $(event.currentTarget).attr('id');
      var Id = formId[formId.length - 1] - 1;
      var country = formData.country;
      var year = formData.year;

      $.ajax({
        url: "./api/records",
        data: {country: country, year: year},
        dataType: 'json',
        success: function(response, XHR, textStatus) {
          console.dir(response);
          this.monthsChart.update(country, year, response.months, Id);
          this.attacksChart.update(country, year, response.attackTypes, Id);
          switch(Id) {
            case 0:
              this.suicidesChart1.update(country, year, response.suicideAttacks, response.nonSuicideAttacks);
              break;
            case 1:
              this.suicidesChart2.update(country, year, response.suicideAttacks, response.nonSuicideAttacks);
              break;
            case 2:
              this.suicidesChart3.update(country, year, response.suicideAttacks, response.nonSuicideAttacks);
              break;
            default:
              // no op
          };
        }.bind(this),
        error: function(XHR, textStatus, errorThrown) {
          console.log(XHR);
        }
      });
    }.bind(this));
  };
})()
