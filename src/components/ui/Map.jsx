import React from "react";
import styled from "styled-components";
import CityItem from "./CityItem";
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';

const Wrapper = styled.div`
    border: 1px solid grey;
    width: 70%;
    height: 400px;
    margin-inline: auto;
    padding: 8px 16px;
    display: flex;
    flex-direction: row;
    aligh-itmes: flex-start;
    justify-content: center;
`;

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 35.864676,
  lng: 128.593345
};

const zoom = 16

const population=200000

function MyComponent() {
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
        <Wrapper>
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
                        clickable: false,
                        draggable: false,
                        editable: false,
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
                        clickable: false,
                        draggable: false,
                        editable: false,
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
                        clickable: false,
                        draggable: false,
                        editable: false,
                        center: center,
                        radius: Math.sqrt(population) * 1.0,
                    }}
                />
            </GoogleMap>
        </Wrapper>
    ) : <></>
}

export default React.memo(MyComponent)