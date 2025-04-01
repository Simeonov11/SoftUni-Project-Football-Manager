export default function About() {
    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-2xl bg-[rgba(255,255,255,0.9)] rounded-lg mx-auto text-center p-5">
                    <article>
                        <h2 className="text-3xl">About us</h2>
                        <p>Hello, this is a free application to help organize football maches for amateur players as a hobby. To start using the app register yourself and create a player and match event.</p>
                        <img src="./images/field.jpg" alt="" className="rounded-lg mt-5" />
                    </article>
                </div>
            </div>
        </>
    );
}