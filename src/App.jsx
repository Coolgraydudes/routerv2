import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import DashBoard from "./pages/DashBoard";
import SantriList from "./pages/SantriList";
import SantriDetail from "./pages/SantriDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/santri" element={<SantriList />} />
            <Route path="/santri/:id" element={<SantriDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}