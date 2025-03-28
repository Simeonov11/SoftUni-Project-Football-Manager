export default function Contacts() {
    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-2xl bg-white mx-auto text-center p-5">
                    <article>
                        <h1>Contact us on</h1>
                        <p>Email: footballmanager@abv.bg</p>
                        <p>Facebook: footballmanager</p>
                        <p>Phone: 555-666-777</p>
                        <p>Address: 55 Victoria Street, Sofia-Bulgaria</p>
                        <img src="./images/map.jpg" alt="" className=" mt-5" />
                    </article>
                </div>
            </div>
        </>
    );
}