import axiosInstance from '../api/axiosInstance';
import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import MovieCard from '../Components/Mcard2';

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  
  console.log('params', params.explore);

  // Using useCallback to memoize fetchData
  const fetchData = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`/discover/${params.explore}`, {
        params: { page: pageNo },
      });

      setData((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      console.log('error', error);
    }
  }, [params.explore, pageNo]); // Dependencies added

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]); // ✅

  useEffect(() => {
    setPageNo(1);
    setData([]);
  }, [params.explore]);

  useEffect(() => {
    if (params.explore !== "movie" && params.explore !== "tv") {
        navigate("/error404"); // Redirect to home if invalid
    }
    }, [params.explore, navigate]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className='py-16'>
      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>
          Popular {params.explore} show
        </h3>

        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {data.map((exploreData) => (
            <MovieCard
              data={exploreData}
              key={exploreData.id + 'exploreSection'}
              media_type={params.explore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
