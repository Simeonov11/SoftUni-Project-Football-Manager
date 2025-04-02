import { useEffect, useRef } from "react";

export default function GoogleMap() {
    const mapRef = useRef(null);
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    console.log("API Key:", apiKey); // Debugging check

    useEffect(() => {
        if (!apiKey) {
            console.error("Google Maps API key is missing!");
            return;
        }

        // initialize the map
        if (!window.google) return;

        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 43.5603, lng: 27.8270 },
            zoom: 14,
            mapId: "DEMO_MAP_ID",
        });

        new window.google.maps.marker.AdvancedMarkerElement({
            map,
            position: { lat: 43.5603, lng: 27.8270 },
            title: "My Location",
        });
        
        
        // initMap();

        // Load Google Maps script dynamically
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=maps,marker&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Cleanup: Remove script on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, [apiKey]);

    return (
        <div style={{ height: "50vh", width: "100%", padding: "5px", marginTop: "10px" }}>
            <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
        </div>
    );
}