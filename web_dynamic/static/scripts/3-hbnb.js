$(document).ready(function() {
    const amenities = [];
    $('li :checkbox').change(function() {
      if (this.checked) {
        amenities.push($(this).attr('data-name'));
      } else {
        const idx = amenities.indexOf($(this).attr('data-name'));
        amenities.splice(idx, 1);
      }
      $('.amenities h4').html(amenities.join(', '));
    });
  
    const url = 'http://0.0.0.0:5001/api/v1/status/'
    $.getJSON(url, (data) => {
      const element = document.getElementById('api_status');
      element.classToggle('available');
    });
  });

