import React from 'react';
import { IoIosCall } from 'react-icons/io';

const Banner = () => {
    return (
        <div className="hero  h-[500px]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white">From Concept to Code</h1>
            <h2 className="text-4xl font-bold text-orange-500  mt-1">We Make IT Happen</h2>
            <p className="py-6 text-white">
            We help brands and B2B enterprises build amazing
            websites that convert their visitors to paying customers.
            </p>
            <button className="btn bg-red-700 text-white rounded-full hover:bg-red-600"><IoIosCall className="text-white text-lg" />Let's have a call</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;