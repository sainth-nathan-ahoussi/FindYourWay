
import './ChurchMap.css'; 
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup }  from "react-leaflet"
import { Icon } from 'leaflet';

const ChurchMap = () => {
    // Markers là où appelera le fichier json avec les informations le temps que la base de données soit mise en place
    const markers = [
    {
        geocode: [48.86, 2.3522],
        popUp: "Hello, I am pop up 1"
    },
    {
        geocode: [48.85, 2.3522],
        popUp: "Hello, I am pop up 2"
    },
    {
        geocode: [48.855, 2.34],
        popUp: "Hello, I am pop up 3"
    }
    ];

    const customIcon = new Icon({
        iconUrl: require("./christian.png"),
        iconSize: [38,38]
    });

    return (
        <div className='Map-Container'>
            <MapContainer center={[48.85, 2.35]} zoom={13}>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

               {markers.map((marker) => (
                    <Marker position={marker.geocode} icon={customIcon}>
                        <Popup>{marker.popUp}</Popup>
                    </Marker>
                 ))}
            </MapContainer>
        </div>
        
    )
}

export default ChurchMap;


