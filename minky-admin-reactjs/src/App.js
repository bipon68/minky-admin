import Nav from "./features/nav/Nav";
import "./App.css";
import SideBar from "./features/sidebar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <SideBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/DashboardPage" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
