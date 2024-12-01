import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/clientpage/homepage";
import { AdminPage } from "./pages/adminpage/admin";
import Categories from "./pages/clientpage/categories";
import LoginPage from "./pages/login/login";
import TestComponent from "./components/test/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/login/*" element={<LoginPage />} />
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/test" element={<TestComponent/>}/>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
