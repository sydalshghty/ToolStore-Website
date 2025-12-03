import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
