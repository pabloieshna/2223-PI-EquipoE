import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "../pages/ErrorPage/NotFound";
import Festivals from "../pages/Festivals/Festivals";
import LandingPage from '../pages/Home/index'
import BusquedaFestival from '../pages/BusquedaFestival/BusquedaFestival.jsx'
import Contacto from '../pages/Contacto/Contacto'

import Nav from "../components/Nav/Nav";
import { Footer } from "../components/Footer/Footer";

function MyRoutes() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/festivals" element={<Festivals />} />
        <Route exact path="/festival/buscar" element={<BusquedaFestival />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes> 
      <Footer />
    </Router>
  );
}
export { MyRoutes };
