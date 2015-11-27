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
    });
  };
})()
