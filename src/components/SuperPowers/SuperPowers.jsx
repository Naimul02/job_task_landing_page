import React from 'react';
import img1 from './powersImg/img1.png';
import img2 from './powersImg/img2.png';
import img3 from './powersImg/img3.png';
import img4 from './powersImg/img4.png';
import img5 from './powersImg/img5.png';


const SuperPowers = () => {
    return (
        <div>
            <div className='text-center text-white'>
                <h1 className="text-3xl font-semibold">Our Superpowers</h1>
            </div>
           <div className="flex gap-28 items-center justify-center mt-8">
           <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s" className="w-12 h-12 rounded-xl" alt="javascript"></img></div>
           <div><img src={img1} className="w-24 h-20" alt="remix"></img></div>
           <div><img src={img2} className="w-24 h-24" alt="Prisma"></img></div>
           <div><img src={img3} className="w-32 h-28"alt="Mongodb"></img></div>
           <div><img src={img4} className="w-20 h-20" alt=""></img></div>
           <div><img src={img5} className="w-20 h-20" alt="paython"></img></div> 
        </div> 
        </div>
    );
};

export default SuperPowers;