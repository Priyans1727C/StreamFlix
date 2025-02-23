import axiosInstance from "./axiosInstance";
import { useEffect, useState } from "react";

const hello = "hello";

export const useFetchDetails = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching details data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (endpoint) fetchData();
  }, [endpoint]);

  return { data, loading };
};


export const useFetchDetailsMetaData = (endpoint) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.get(endpoint);
      setLoading(false)
      setData(response.data.results)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [endpoint])

  return { data, loading }
}


export default hello;