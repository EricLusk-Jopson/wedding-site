import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Rsvp from "./pages/RSVP/Rsvp";
import Gallery from "./pages/Gallery/Gallery";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/rsvp/:token" element={<Rsvp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/thank-you" element={<div>Thank you for RSVPing!</div>} />
        <Route path="/sorry" element={<div>Sorry you can't make it.</div>} />
      </Routes>
    </>
  );
}

export default App;
