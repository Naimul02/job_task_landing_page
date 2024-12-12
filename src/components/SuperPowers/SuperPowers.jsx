import React, { useEffect } from 'react';
import img1 from './powersImg/img1.png';
import img2 from './powersImg/img2.png';
import img3 from './powersImg/img3.png';
import img4 from './powersImg/img4.png';
import img5 from './powersImg/img5.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const SuperPowers = () => {
    useEffect(() => {
        Aos.init({duration : 1000})
    } , [])
    return (
        <div data-aos="fade-up">
            <div className='text-center text-white'>
                <h1 className="text-3xl font-semibold">Our Superpowers</h1>
            </div>


            




           <div className="flex flex-row gap-28 md:gap-10 lg:gap-28 justify-center md:mx-12 lg:mx-0 mt-10">
            <div className="flex flex-col  md:flex-row md:items-center md:justify-center space-y-10 md:gap-10 lg:gap-28 md:space-y-0">
            <div><img src={img3} className="w-24 h-24"alt="Mongodb"></img></div>
            
           <div><img src={img1} className="w-24 h-24" alt="remix"></img></div>
           <div><img src={img2} className="w-24 h-24" alt="Prisma"></img></div>
            </div>
         
         <div className="flex flex-col  md:flex-row md:items-center md:justify-center space-y-10 md:gap-10 lg:gap-28 md:space-y-0">
           <div><img src={img5} className="w-24 h-24" alt="paython"></img></div> 
           <div><img src={img4} className="w-24 h-24" alt=""></img></div>
           <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s" className="w-24 h-24 rounded-xl" alt="javascript"></img></div>
         
         </div>
        </div> 
        </div>
    );
};

export default SuperPowers;