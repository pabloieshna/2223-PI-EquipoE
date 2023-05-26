import NotFound from "../pages/ErrorPage/NotFound";
import SearchResults from "../pages/SearchResults/index";
import LandingPage from '../pages/Home/index'
import Nav from "../components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Footer } from "../components/Footer/Footer";
function MyRoutes() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/festivals" element={<SearchResults />} />
        <Route exact path="/events" element={<SearchResults />} />
        <Route exact path="/events/:ciudad" element={<SearchResults />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes> 
      {/* <Footer /> */}
    </Router>
  );
}
export { MyRoutes };
