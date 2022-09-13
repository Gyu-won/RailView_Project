import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

function Map(props){
    
    const MapStyles = {
        width: '100%',
        height: '100%',
    };

    return(
        <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{lat: 35.864676, lng: 128.593345}}
        />
    );
}

export default Map;