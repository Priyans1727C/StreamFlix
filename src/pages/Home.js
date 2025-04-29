import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";
import SlidingBanner from "../Components/SlidingBanner";

import HorizontalCarding from '../Components/HorizontalCarding'
import Loader from '../plugins/loading';
import Error404 from '../plugins/error'; ;


const Home = () => {
  const dispatch = useDispatch();
  const { trending, airingToday, onTheAir, popular, topRated, status } = useSelector((state) => {
    console.log("Redux State:", state.movies);
    return state.movies;
  });


  useEffect(() => {
    console.log("Dispatching fetchMovies...");
    dispatch(fetchMovies("TRENDING"));
    dispatch(fetchMovies("TOP_RATED"));
    dispatch(fetchMovies("AIRING_TODAY"));
    dispatch(fetchMovies("POPULAR"));
    dispatch(fetchMovies("ON_THE_AIR"));
  }, [dispatch]);

  if (status === "loading")
        return <div><Loader/></div>;
  if (status === "failed") 
        // return <div>Error: {error}</div>;
        return <Error404/>


  return (
    
    <div className="pb-4 lg:pb-0 bg-[#1a1927]">
      <SlidingBanner/>
      <HorizontalCarding data={trending} heading={"Trending"}  trending={true}/>
      <HorizontalCarding data={topRated} heading={"Top Rated"} media_type={"tv"}/>
      <HorizontalCarding data={airingToday} heading={"Airing Today"} media_type={"tv"}/>
      <HorizontalCarding data={popular} heading={"Popular"} media_type={"tv"}/>
      <HorizontalCarding data={onTheAir} heading={"On The Air"} media_type={"tv"}/>
      

    </div>
  );
};



export default Home;
