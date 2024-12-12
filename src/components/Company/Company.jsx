import React, { useEffect } from 'react';
import img1 from './CompanyImg/img1.png';
import img2 from './CompanyImg/img2.png';
import img3 from './CompanyImg/img3.png';
import img4 from './CompanyImg/img4.png';
import img5 from './CompanyImg/img5.png';
import img6 from './CompanyImg/img6.png';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Company = () => {
    useEffect(() => {

        Aos.init({duration : 1000});
      }
       , [])
    return (
        <div className="flex flex-row gap-28 md:gap-10 lg:gap-28 justify-center md:mx-12 lg:mx-0 mt-28 md:mt-6 lg:mt-0" data-aos="fade-up">
            {/* company img */}
          <div className="flex flex-col  md:flex-row md:items-center md:justify-center space-y-10 md:gap-10 lg:gap-28 md:space-y-0">
          <div><img src={img1} className="w-24 h-24" alt="azure"></img></div>
           <div><img src={img2} className="w-24 h-24" alt="github"></img></div>
           <div><img src={img3} className="w-24 h-24" alt="cloudFlare"></img></div>
          </div>
           
           <div className="flex flex-col  md:flex-row md:items-center md:justify-center space-y-10 md:gap-10 lg:gap-28 md:space-y-0">
           <div><img src={img4} className="w-24 h-24"alt="digitalOcean"></img></div>
           <div><img src={img5} className="w-24 h-24" alt="googleCloud"></img></div>
           <div><img src={img6} className="w-24 h-24" alt="linode"></img></div> 
           </div>
        </div>
    );
};

export default Company;