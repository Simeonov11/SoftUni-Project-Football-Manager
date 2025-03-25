export default function Matches() {
    return (
        <>
            <div className="bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover bg-center h-180 pt-5">
                <div className="content w-7xl bg-white flex justify-center mx-auto">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="w-25 px-5 py-2">Date</th>
                                <th className="w-30 px-5 py-2">Start Time</th>
                                <th className="w-25 px-5 py-2">Owner</th>
                                <th className="w-25 px-5 py-2">Status</th>
                                <th className="w-25 px-5 py-2">Players</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="w-30 px-5 py-2 text-center">14.13.2025</td>
                                <td className="w-30 px-5 py-2 text-center">15:00</td>
                                <td className="w-30 px-5 py-2 text-center">John Doe</td>
                                <td className="w-30 px-5 py-2 text-center">Open</td>
                                <td className="w-30 px-5 py-2 text-center">9/10</td>
                                <td className="w-30 px-5 py-2 text-center"><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Details</a></td>
                            </tr>
                            <tr>
                                <td className="w-30 px-5 py-2 text-center">14.13.2025</td>
                                <td className="w-30 px-5 py-2 text-center">16:00</td>
                                <td className="w-30 px-5 py-2 text-center">John Doe</td>
                                <td className="w-30 px-5 py-2 text-center">Open</td>
                                <td className="w-30 px-5 py-2 text-center">9/10</td>
                                <td className="w-30 px-5 py-2 text-center"><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Details</a></td>
                            </tr>
                            <tr>
                                <td className="w-30 px-5 py-2 text-center">14.13.2025</td>
                                <td className="w-30 px-5 py-2 text-center">17:00</td>
                                <td className="w-30 px-5 py-2 text-center">John Doe</td>
                                <td className="w-30 px-5 py-2 text-center">Open</td>
                                <td className="w-30 px-5 py-2 text-center">9/10</td>
                                <td className="w-30 px-5 py-2 text-center"><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Details</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}