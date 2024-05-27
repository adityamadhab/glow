import React, { useState } from 'react';
import servicesData from '../../constants/ServiceData';

export const FeatureSlider = () => {
  const [showMore, setShowMore] = useState(false);

  const services = servicesData;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='mx-auto my-8 py-4'>
      <h2 className="text-xl text-center font-semibold mb-8">Featured Services</h2>
      <div className="grid grid-cols-4 gap-18">
        {services.slice(0, showMore ? services.length : 4).map((service, index) => (
          <div key={index} className="flex flex-col items-center mb-4">
            <img src={service.imageUrl} alt={service.name} className="w-[13rem] h-[13rem] rounded-full mb-2 object-cover" />
            <h3 className="text-md">{service.name}</h3>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        {!showMore ? (
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-green-800" onClick={toggleShowMore}>
            Show more
          </button>
        ) : (
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-green-800" onClick={toggleShowMore}>
            Show less
          </button>
        )}
      </div>
    </div>
  );
};
