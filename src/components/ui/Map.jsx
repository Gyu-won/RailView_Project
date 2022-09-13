import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  height: '400px'
};

const center = {
  lat: 35.864676,
  lng: 128.593345
};

const zoom = 16

const population=200000

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDNrTyztHjVlXK8p5MEqQhPg3gA8q_DZhA"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.setZoom(zoom);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker
                icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 7,
                }}
                position={center}
            />

            <Circle
                center={center}
                options={{
                    strokeColor: '#0000FF',
                    strokeOpacity: 0,
                    strokeWeight: 0,
                    fillColor: '#0000FF',
                    fillOpacity: 0.20,
                    map,
                    center: center,
                    radius: Math.sqrt(population) * 0.4,
                }}
            />

            <Circle
                center={center}
                options={{
                    strokeColor: '#0000FF',
                    strokeOpacity: 0,
                    strokeWeight: 0,
                    fillColor: '#0000FF',
                    fillOpacity: 0.20,
                    map,
                    center: center,
                    radius: Math.sqrt(population) * 0.7,
                }}
            />

            <Circle
                center={center}
                options={{
                    strokeColor: '#0000FF',
                    strokeOpacity: 0,
                    strokeWeight: 0,
                    fillColor: '#0000FF',
                    fillOpacity: 0.20,
                    map,
                    center: center,
                    radius: Math.sqrt(population) * 1.0,
                }}
            />
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)