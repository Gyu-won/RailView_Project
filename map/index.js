function initMap() {
    const banweoldang = new google.maps.LatLng({ lat: 35.864676, lng: 128.593345 });
    const population = 200000;
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: banweoldang,
    });

    const markerIcon = "marker icon url";

    const marker = new google.maps.Marker({
        position: banweoldang,
        //icon: markerIcon,
        map: map,
    });

    const circle1 = new google.maps.Circle({
        strokeColor: "#0000FF",
        strokeOpacity: 0,
        strokeWeight: 0,
        fillColor: "#0000FF",
        fillOpacity: 0.20,
        map,
        center: banweoldang,
        radius: Math.sqrt(population) * 0.4,
    });

    const circle2 = new google.maps.Circle({
        strokeColor: "#0000FF",
        strokeOpacity: 0,
        strokeWeight: 0,
        fillColor: "#0000FF",
        fillOpacity: 0.20,
        map,
        center: banweoldang,
        radius: Math.sqrt(population) * 0.7,
    });

    const circle3 = new google.maps.Circle({
        strokeColor: "#0000FF",
        strokeOpacity: 0,
        strokeWeight: 0,
        fillColor: "#0000FF",
        fillOpacity: 0.20,
        map,
        center: banweoldang,
        radius: Math.sqrt(population) * 1.0,
    });
}

window.initMap = initMap;