
$(document).ready(function () {

    //  console.log("here")
    const geo = navigator.geolocation;

    geo.getCurrentPosition(success, failure);

    function success(position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        console.log(lat + ',' + lng);
        //mapView.setCenter(ol.proj.fromLonLat([lng, lat]));
    }

    function failure(error) {
        console.log(error.message);
    }

});