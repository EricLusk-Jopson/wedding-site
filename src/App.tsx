import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Venue from "./pages/Venue/Venue";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Venue" element={<Venue />} />
      </Routes>
    </>
  );
}

export default App;
