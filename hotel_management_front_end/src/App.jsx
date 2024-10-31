import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/clientpage/homepage";
import { AdminPage } from "./pages/adminpage/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Admin/*" element={<AdminPage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
