import { Link, Route, Routes } from "react-router-dom";
import { CiBookmark } from "react-icons/ci"; 
import { MdOutlineCategory } from "react-icons/md";
import {
  RiHotelBedLine,
  RiUserLine,
  RiMessageLine,
  RiGalleryLine,
} from "react-icons/ri"; 
import Bookings from "./bookings/adminbooking";
import Category from "./category/admincategory";
import Rooms from "./rooms/adminrooms";
import Users from "./users/adminuser";
import Feedbacks from "./Feedbacks/adminFeedbacks";
import Gallery from "./gallery/admingallery";

export function AdminPage() {
  return (
    <div className="w-full h-[100vh] flex">
      <div className="w-[20%] bg-blue-400 h-full flex flex-col space-y-4 fixed">
        <div className="text-white text-[30px] hover:font-bold hover:text-blue-600 flex items-center space-x-2 p-4">
          <CiBookmark />
          <Link to="/admin/booking">Bookings</Link>
        </div>
        <div className="text-white text-[30px] hover:font-bold hover:text-blue-600 flex items-center space-x-2 p-4">
          <MdOutlineCategory />
          <Link to="/admin/category">Category</Link>
        </div>
        <div className="text-white text-[30px] hover:font-bold hover:text-blue-600 flex items-center space-x-2 p-4">
          <RiHotelBedLine />
          <Link to="/admin/rooms">Rooms</Link>
        </div>
        <div className="text-white text-[30px] hover:font-bold hover:text-blue-600 flex items-center space-x-2 p-4">
          <RiUserLine />
          <Link to="/admin/users">Users</Link>
        </div>
        <div className="text-white text-[30px] hover:font-bold hover:text-blue-600 flex items-center space-x-2 p-4">
          <RiMessageLine />
          <Link to="/admin/feedbacks">Feedbacks</Link>
        </div>
        <div className="text-white text-[30px] hover:font-bold hover:text-blue-600 flex items-center space-x-2 p-4">
          <RiGalleryLine />
          <Link to="/admin/gallery">Gallery Items</Link>
        </div>
      </div>

      <div className="w-[80%] ml-[20%] overflow-y-auto h-full bg-blue-800">
        <Routes>
          <Route path="/booking" element={<Bookings />} />
          <Route path="/category" element={<Category/>} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/feedbacks" element={<Feedbacks/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </div>
    </div>
  );
}
