import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/clientpage/homepage";
import { AdminPage } from "./pages/adminpage/admin";
import LoginPaage from "./pages/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/login/*" element={<LoginPaage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
