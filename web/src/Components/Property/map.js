import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Loading from '../Loading';

const containerStyle = {
    width: '100%',
    height: '400px'
};

function PropertyMap({ lat, lng }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAgDNp9ODM9haCAXoEtVKq3fGSRkrQCIgI"
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat, lng }}
            zoom={15}
        >
            <Marker
                position={{ lat, lng }}
            />
        </GoogleMap >
    ) : <Loading />
}

export default React.memo(PropertyMap)