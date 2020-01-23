$(document).ready(function () {




var mymap = L.map('mapid').setView([46.136, -60.1942], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var greenIcon = L.icon({
    iconUrl: 'images/cp/s.gif',
    shadowUrl: 'images/leaf-shadow.png',

    iconSize:     [68, 68], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [34, 68], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});



window.marker = L.marker([46.140, -60.194],{icon: greenIcon}).addTo(mymap);
marker.bindPopup("<b>The best town!</b><br>Love sydney.");

var popup = L.popup();

var polyPoints = [];
window.polygon = '';

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


window.moveChar = function(compassDir) {
    console.dir(marker);
//var iSrc = window.marker._icon.outerHTML;    
//    window.marker._icon.outerHTML = iSrc.substr(0, iSrc.indexOf(".gif")-1) + compassDir + iSrc.substr(iSrc.indexOf(".gif"), iSrc.length);
    var iSrc = window.marker.options.icon.options.iconUrl;
    window.marker.options.icon.options.iconUrl = iSrc.substr(0, iSrc.indexOf(".gif")-1) + compassDir + iSrc.substr(iSrc.indexOf(".gif"), iSrc.length);
}



setTimeout(function(){

//        console.dir(window.marker);
//window.marker._icon.outerHTML = marker._icon.outerHTML.replace('s.gif', 'n.gif');        
  //      console.dir(window.marker._icon.outerHTML);
//.substr(0, str.length - 2)
moveChar('n')
}, 1000);



});