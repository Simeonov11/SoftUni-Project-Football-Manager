import { useEffect, useRef } from "react";

export default function GoogleMap() {
    const mapRef = useRef(null);
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // Use correct env variable

    useEffect(() => {
        if (!apiKey) {
            console.error("Google Maps API key is missing!");
            return;
        }

        const loadGoogleMaps = () => {
            if (!window.google) {
                console.error("Google Maps script failed to load.");
                return;
            }

            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 43.5603, lng: 27.8270 },
                zoom: 14,
                mapId: "DEMO_MAP_ID", // Replace with your actual Map ID
            });

            new window.google.maps.Marker({
                map,
                position: { lat: 43.5603, lng: 27.8270 },
                title: "My Location",
            });
        };

        const existingScript = document.querySelector("script[src^='https://maps.googleapis.com']");
        if (!existingScript) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=maps,marker`;
            script.async = true;
            script.defer = true;
            script.onload = loadGoogleMaps;
            document.body.appendChild(script);
        } else {
            loadGoogleMaps();
        }
    }, [apiKey]);

    return (
        <div style={{ height: "50vh", width: "100%", padding: "5px", marginTop: "10px" }}>
            <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
        </div>
    );
}
