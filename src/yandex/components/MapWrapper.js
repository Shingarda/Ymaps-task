import React from 'react';
import { connect } from 'react-redux';
import { Map, Placemark, Polyline } from 'react-yandex-maps';
import { mapStateToProps } from '../redux/selectors';
import { changePoint } from '../redux/actions';

function MapWrapper({ ymaps, geocode, markers, changePoint }) {
    console.log(markers);
    const coordArray = markers.map(element =>
        element.marker.geometry.getCoordinates()
    );

    const onMarkerDragEnd = async function (event, prevMarker) {
        const geoObject = await geocode(
            ymaps,
            event.originalEvent.target.geometry.getCoordinates()
        );

        if (geoObject) {
            changePoint(prevMarker.id, geoObject);
        }
    };


    return (
        <Map
            state={{center: [55.75, 37.57], zoom: 9}}
            width="100%"
        >
            {markers.length > 0 && markers.map((element) =>
                element && (<Placemark
                    key={element.id}
                    geometry={element.marker.geometry.getCoordinates()}
                    options={{
                        draggable: true,
                    }}
                    properties={{
                        balloonContent: element.marker.getAddressLine()
                    }}
                    modules={['geoObject.addon.balloon']}
                    onDragEnd={event => onMarkerDragEnd(event, element)}
                />)
            )}
            {markers.length > 1 && (<Polyline
                geometry={coordArray}
                options={{
                    balloonCloseButton: false,
                    strokeColor: '#000',
                    strokeWidth: 2,
                    strokeOpacity: 0
                }}
            />)}
        </Map>
    )
}

export default connect(
    mapStateToProps,
    { changePoint }
)(MapWrapper);