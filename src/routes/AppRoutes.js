import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import ExplorePage from "../pages/ExplorePage.js";
import DetailsPage from "../pages/DetailsPage2.js";
import SearchPage from "../pages/SearchPage.js";
import Error404 from '../plugins/error'; ;


const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:explore" element={<ExplorePage />} />
        <Route path="/:explore/:id" element={<DetailsPage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/error404" element={<Error404/>} />
      </Routes>
    );
  };
  

export default AppRoutes