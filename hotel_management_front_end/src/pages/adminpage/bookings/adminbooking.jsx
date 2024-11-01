const bookings = [
    {
      bookingId: "B001",
      roomId: "R101",
      email: "john.doe@example.com",
      status: "Confirmed",
      reason: "Vacation",
      startDate: "2024-11-01",
      endDate: "2024-11-05",
      notes: "Early check-in requested",
      timeStamp: "2024-10-30 12:00:00",
    },
    {
      bookingId: "B002",
      roomId: "R102",
      email: "jane.smith@example.com",
      status: "Cancelled",
      reason: "Personal reasons",
      startDate: "2024-11-03",
      endDate: "2024-11-07",
      notes: "Requested refund",
      timeStamp: "2024-10-30 15:30:00",
    },
    {
      bookingId: "B003",
      roomId: "R103",
      email: "alice.jones@example.com",
      status: "Pending",
      reason: "Business trip",
      startDate: "2024-11-10",
      endDate: "2024-11-15",
      notes: "Needs projector in room",
      timeStamp: "2024-10-31 09:45:00",
    },
    {
      bookingId: "B004",
      roomId: "R104",
      email: "bob.brown@example.com",
      status: "Confirmed",
      reason: "Conference attendance",
      startDate: "2024-11-12",
      endDate: "2024-11-18",
      notes: "Late check-out requested",
      timeStamp: "2024-10-31 14:20:00",
    },
    {
      bookingId: "B005",
      roomId: "R105",
      email: "charlie.black@example.com",
      status: "Completed",
      reason: "Holiday",
      startDate: "2024-10-15",
      endDate: "2024-10-20",
      notes: "Family suite",
      timeStamp: "2024-10-21 10:00:00",
    },
  ];
  
  export default function Bookings() {
    return (
      <div className="w-full p-4">
        <h2 className="text-2xl font-semibold mb-4 text-white">Bookings List</h2>
        <table className="w-full text-white">
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
            {bookings.map((booking , index) => (
              <tr key={index}>
                <td className="border p-2">{booking.bookingId}</td>
                <td className="border p-2">{booking.roomId}</td>
                <td className="border p-2">{booking.email}</td>
                <td className="border p-2">{booking.status}</td>
                <td className="border p-2">{booking.reason}</td>
                <td className="border p-2">{booking.startDate}</td>
                <td className="border p-2">{booking.endDate}</td>
                <td className="border p-2">{booking.notes}</td>
                <td className="border p-2">{booking.timeStamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  