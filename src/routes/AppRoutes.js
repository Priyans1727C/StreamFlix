import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import ExplorePage from "../pages/ExplorePage.js";
import DetailsPage from "../pages/DetailsPage.js";
import SearchPage from "../pages/SearchPage.js";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:explore" element={<ExplorePage />} />
        <Route path="/:explore/:id" element={<DetailsPage/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    );
  };
  

export default AppRoutes