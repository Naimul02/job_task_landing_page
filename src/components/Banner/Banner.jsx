import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { FaEye, FaUsers } from 'react-icons/fa';
import { HiArrowTrendingUp, HiOutlineArrowLongDown } from 'react-icons/hi2';
import { IoIosCall } from 'react-icons/io';
import { RiMouseLine } from 'react-icons/ri';

const Banner = () => {
    return (
        <div className="hero  h-[600px]">
        <div className="hero-content text-center">

            <div className="flex gap-16">
                <div className='mt-16'>
                <FaUsers className='text-6xl p-3 bg-orange-800  text-white  rounded-full'/>
                </div>
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white">From Concept to Code</h1>
            <h2 className="text-4xl font-bold text-orange-500  mt-1">We Make IT Happen</h2>
            <p className="py-6 text-white">
            We help brands and B2B enterprises build amazing
            websites that convert their visitors to paying customers.
            </p>
            <button className="btn bg-red-700 text-white rounded-full hover:bg-red-600"><IoIosCall className="text-white text-lg" />Let's have a call</button>

            <div className="mt-3">
            <RiMouseLine className="text-white text-3xl text-center mx-auto"/>
            
            <p className="text-4xl text-white my-2">↓</p>
            <p className='text-white'>TRUSTED BY OUR PARTNERS</p>
            </div>
          </div>

          <div className="flex gap-2 mt-16">
              <HiArrowTrendingUp className='text-6xl p-3 bg-orange-800  text-white  rounded-full mt-6'/>
                <div className="space-y-3">
                <AiOutlineDollar className='text-5xl p-3 bg-orange-800  text-white  rounded-full'/>
            <FaEye className='text-5xl p-3 bg-orange-800  text-white  rounded-full'/></div>
          </div>
            </div>
        </div>
      </div>
    );
};

export default Banner;