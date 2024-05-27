import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { SalonNav } from "./SalonNav";
import { SalonPhotosDetail } from "./SalonPhotosDetail";

function SalonDetails() {
  const { id } = useParams();
  const [salon, setSalon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalonDetails = async () => {
      try {
        const response = await axios.get(`/salons/salon/${id}`);
        setSalon(response.data);
      } catch (error) {
        setError('Error fetching salon details');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSalonDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <SalonPhotosDetail salon={salon} />
      <div className="w-full max-w-7xl mx-auto xl:px-20 md:px-10 px-4">
        <SalonNav salon={salon} />
      </div>
      <div className="my-10 py-5">
        <div class=" w-full max-w-7xl mx-auto xl:px-20  md:px-10 px-4 ">
          <h1 class="text-sm sm:text-xl font-semibold">Developer is working on this Page</h1>
          <p class="text-sm">Have patience </p>
        </div>
      </div>
    </div>
  );
}

export default SalonDetails;
