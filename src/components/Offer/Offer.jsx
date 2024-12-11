import React, { useEffect } from 'react';
import { MdDeveloperBoard } from 'react-icons/md';
import { RiVerifiedBadgeLine } from 'react-icons/ri';
import './Offer.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Offer = () => {
    useEffect(() => {
        Aos.init({duration : 1000})
    } , [])

    const datas = [
        {
            id : '01' ,
            title : 'Development',  
            li1 : 'UIUX',
            li2 : 'DevOps',
            li3 : 'Web design',
            li4 : 'Frontend dev',
            li5 : 'Backend dev'
        },
        {
            id : '02' ,
            title : 'MSP',  
            li1 : 'Infrastructure manager',
            li2 : 'Managed monitoring',
            li3 : 'Business Continuity',
            li4 : 'Managed Cyber'
            
        },
        {
            id : '03' ,
            title : '3Cloud',  
            li1 : 'AWS',
            li2 : 'AZURE',
            li3 : 'Multi Cloud',
            li4 : 'SRE Strategy',
            li5 : 'Server less',
            li5 : 'Hybrid Strategy'
        },
        {
            id : '05' ,
            title : 'Cyber',  
            li1 : 'Cyber Audit',
            li2 : 'Cyber governance',
            li3 : 'Security as a service',
            li4 : 'Penetration Testin',
            
        },
    ]
    
    return (
        <div className='py-16 container mx-auto'data-aos="fade-up">
            
            <div className="text-center space-y-2 text-white">
                <h1 className="text-3xl font-bold">What we offer</h1>
                <p className="border rounded-full py-2 px-4 border-red-800 inline-block">Our Experts will help you in following Fields</p>

            </div>

            {/* cards */}
            <div className="grid grid-cols-1 mx-4 lg:mx-0 md:grid-cols-2 lg:grid-cols-4 gap-8  mt-16">
                {
                    datas?.map(data =>  <div className="cardOffer h-[350px]">
                        <div className='flex px-2 gap-2 items-center  mt-6'>
                        <span><MdDeveloperBoard className='z-10 text-3xl font-bold text-white'/></span>
                        <h3 className="text-3xl font-semibold text-white z-10">{data?.title}</h3>
                        </div>
            
                        <ul className='z-10 mt-5 ml-[40px] rounded-lg space-y-2  bg-[#8B0000] h-full p-4'>
                        <li className="flex gap-2 text-left z-10 items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" />{data?.li1}</li>
                  <li className="flex gap-2 text-left z-10 items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" />{data?.li2}</li>
                  <li className="flex gap-2 text-left z-10 items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" /> {data?.li3}</li>
                  <li className="flex gap-2 text-left z-10 items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" /> {data?.li4}</li>
                  {data?.li5 && <li className="flex gap-2 text-left z-10 items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" /> {data?.li5}</li>}
                        </ul>
            
                        </div>)
                }
            </div>
        </div>
    );
};

export default Offer;