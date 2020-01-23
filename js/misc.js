function onMapClick(e) {
    //polyPoints.push([e.latlng.lat, e.latlng.lng]);
  
    polyPoints.push(e.latlng);
    popup
      .setLatLng(e.latlng)
      .setContent("Point #" + polyPoints.length + " at " + e.latlng.toString())
      .openOn(mymap);
  
    if (polyPoints.length > 2) {
      if (polyPoints.length > 3) {
        window.polygon.remove();
      }
      window.polygon = L.polygon(polyPoints).addTo(mymap);
    }
  }
  mymap.on('click', onMapClick);