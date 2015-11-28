(function() {
  if (typeof Display === 'undefined') {
    window.Display = {};
  };

  var FormParser = Display.FormParser = function (monthsEl, attacksEl, suicidesEl) {
    this.monthsChart = new window.Display.MonthsChart(monthsEl);
    this.attacksChart = new window.Display.AttacksChart(attacksEl);
    this.suicidesChart = new window.Display.SuicidesChart(suicidesEl);
  };

  FormParser.prototype.handleSubmit = function() {
    $('form').on('submit', function(e){
      e.preventDefault();
      var formData = $(event.currentTarget).serializeJSON();
      var formID = $(event.currentTarget).attr('id');
      var Id = formID[formID.length - 1] - 1;
      var country = formData.country;
      var year = formData.year;

      console.log('Country: ' + country + '; Year: ' + year);
      $.ajax({
        url: "./api/records",
        data: {country: country, year: year},
        dataType: 'json',
        success: function(response, XHR, textStatus) {
          console.dir(response);
          this.monthsChart.update(response.countryName, response.months, Id);
          this.attacksChart.render(response.attackTypes);
          this.suicidesChart.render(response.suicideAttacks, response.nonSuicideAttacks);
        }.bind(this),
        error: function(XHR, textStatus, errorThrown) {
          console.log(XHR);
        }
      });
    }.bind(this));
  };
})()
