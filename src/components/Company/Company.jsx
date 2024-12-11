import React from 'react';
import img1 from './CompanyImg/img1.png';
import img2 from './CompanyImg/img2.png';
import img3 from './CompanyImg/img3.png';
import img4 from './CompanyImg/img4.png';
import img5 from './CompanyImg/img5.png';
import img6 from './CompanyImg/img6.png';


const Company = () => {
    return (
        <div className="flex gap-28 justify-center">
           <div><img src={img1} className="w-28 h-24" alt="azure"></img></div>
           <div><img src={img2} className="w-20 h-20" alt="github"></img></div>
           <div><img src={img3} className="w-24 h-24" alt="cloudFlare"></img></div>
           <div><img src={img4} className="w-20 h-20"alt="digitalOcean"></img></div>
           <div><img src={img5} className="w-20 h-20" alt="googleCloud"></img></div>
           <div><img src={img6} className="w-28 h-20" alt="linode"></img></div> 
        </div>
    );
};

export default Company;