$(document).ready( () => {
  const amenities = [];
  $('input[type="checkbox"]').change( () => {
    if (this.checked) {
      amenities.push(this.id);
    } else {
      const idx = amenities.indexOf(this.id);
      if (idx >= 0) {
        amenities.splice(idx, 1);
      };
    };
    $('div.Amenities h4').text('Amenities: ' + amenities.join(', '));
  });

  const url = 'http://0.0.0.0:5001/api/v1/status/'
  $.get(url, (data) => {
    const element = document.getElementById('api_status');
    if (data.status === 'OK') {
      element.classList.add('available');
    } else {
      element.classList.remove('available');
    };
  });
});
