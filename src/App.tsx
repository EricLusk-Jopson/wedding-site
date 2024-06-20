import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Venue from "./pages/Venue/Venue";
import Rsvp from "./pages/RSVP/Rsvp";
import Gallery from "./pages/Gallery/Gallery";
import Registry from "./pages/Registry/Registry";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Venue" element={<Venue />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/RSVP" element={<Rsvp />} />
        <Route path="/Registry" element={<Registry />} />
      </Routes>
    </>
  );
}

export default App;
