import { Link, Route, Routes } from "react-router-dom";

export function AdminPage() {
  return (
    <div className="w-full h-[100vh] bg-red-400">
      <div>
        <Link className="mr-12" to={"/Admin/rooms"}>
          rooms
        </Link>
        <Link className="mr-12" to={"/Admin/booking"}>
          booking
        </Link>
      </div>
      <Routes path="/*">
        <Route
          path="/rooms"
          element={
            <div>
              <h1>rooms</h1>
            </div>
          }
        />

        <Route
          path="/booking"
          element={
            <div>
              <h1>bookins</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
