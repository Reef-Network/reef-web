import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { LandingPage } from "./pages/LandingPage";
import { AppsPage } from "./pages/AppsPage";
import { DashboardPage } from "./pages/DashboardPage";

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
}
