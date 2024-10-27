import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/clientpage/homepage";
import { AdminPage } from "./pages/adminpage/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Admin/*" element={<AdminPage/>} />
        <Route path="/*" element={<h1>page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
