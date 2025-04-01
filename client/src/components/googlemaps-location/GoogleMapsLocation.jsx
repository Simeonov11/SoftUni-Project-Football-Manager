import { useEffect, useRef } from "react";

export default function GoogleMap() {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!window.google) return;

        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 43.5603, lng: 27.8270 },
            zoom: 14,
            mapId: "DEMO_MAP_ID", // Replace with your actual Map ID if needed
        });

        new window.google.maps.marker.AdvancedMarkerElement({
            map,
            position: { lat: 43.5603, lng: 27.8270 },
            title: "My Location",
        });

    }, []);

    return (
        <div style={{ height: "50vh", width: "100%", padding: "5px", marginTop: "10px" }}>
            <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
        </div>
    );
}