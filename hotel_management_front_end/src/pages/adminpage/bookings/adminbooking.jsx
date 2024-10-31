export default function Bookings() {
    return (
        <div className="w-full p-4">
            <h2 className="text-2xl font-semibold mb-4 text-white">Bookings List</h2>
            <table className="w-full  text-white">
                <thead>
                    <tr>
                        <th className="border p-2">Booking ID</th>
                        <th className="border p-2">Room ID</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Reason</th>
                        <th className="border p-2">Start Date</th>
                        <th className="border p-2">End Date</th>
                        <th className="border p-2">Notes</th>
                        <th className="border p-2">Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2 text-center">101</td>
                        <td className="border p-2 text-center">12</td>
                        <td className="border p-2 text-center">john.doe@example.com</td>
                        <td className="border p-2 text-center">confirmed</td>
                        <td className="border p-2 text-center">Vacation stay</td>
                        <td className="border p-2 text-center">11/10/2024</td>
                        <td className="border p-2 text-center">11/15/2024</td>
                        <td className="border p-2 text-center">Request for early check-in</td>
                        <td className="border p-2 text-center">10/20/2024</td>
                    </tr>
                    <tr>
                        <td className="border p-2 text-center">102</td>
                        <td className="border p-2 text-center">8</td>
                        <td className="border p-2 text-center">jane.smith@example.com</td>
                        <td className="border p-2 text-center">pending</td>
                        <td className="border p-2 text-center">N/A</td>
                        <td className="border p-2 text-center">11/20/2024</td>
                        <td className="border p-2 text-center">11/25/2024</td>
                        <td className="border p-2 text-center">Allergy to feathers</td>
                        <td className="border p-2 text-center">10/21/2024</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
}
