$(document).ready(function() {
  const amenities = [];
  $('li :checkbox').change(function() {
    if (this.checked) {
      amenities.push($(this).attr('data-name'));
    } else {
      amenities.pop();
    }
    $('.amenities h4').html(amenities.join(', '));
  });

  const url = 'http://127.0.0.1:5001/api/v1/status/'
  $.getJSON(url, (data) => {
    const element = document.getElementById('api_status');
    element.classToggle('available');
  });
});
