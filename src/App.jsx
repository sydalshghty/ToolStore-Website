import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import ProductPage from "./pages/Product-page";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App;
