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
});
