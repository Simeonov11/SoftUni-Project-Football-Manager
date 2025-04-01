import GoogleMap from "../googlemaps-location/GoogleMapsLocation";

export default function Contacts() {
    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-2xl bg-[rgba(255,255,255,0.9)] rounded-lg mx-auto text-center p-5">
                    <article>
                        <h2 className="text-3xl">Contact us on</h2>
                        <p>Email: footballmanager@abv.bg</p>
                        <p>Facebook: footballmanager</p>
                        <p>Phone: 555-666-777</p>
                        <p>Address: Sport Center General Kolev 82, Dobrich-Bulgaria</p>
                        {/* <img src="./images/map.jpg" alt="" className="rounded-lg mt-5" /> */}
                        <GoogleMap />
                    </article>
                </div>
            </div>
        </>
    );
}