(function() {
  if (typeof Display === 'undefined') {
    window.Display = {};
  };

  var formParser = Display.formParser = function () {
  };

  formParser.prototype.handleSubmit = function() {
    $('form').on('submit', function(e){
      e.preventDefault();
      var formData = $(event.currentTarget).serializeJSON();
      var country = formData.country;
      var year = formData.year;
      console.log('Country: ' + country + '; Year: ' + year);
      $.ajax({
        url: "./api/records",
        data: {country: country, year: year},
        dataType: 'json',
        success: function(response, XHR, textStatus) {
          console.dir(response);
        },
        error: function(XHR, textStatus, errorThrown) {
          console.log(XHR);
        }
      });
    });
  };
})()
