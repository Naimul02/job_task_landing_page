import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { RiVerifiedBadgeLine } from 'react-icons/ri';

const Blogs = () => {
    return (
        <div className='py-16 container mx-auto'>
            <div className='text-center text-white'>
                <h1 className="text-lg font-semibold">Read Our Blog</h1>
                <h2 className='text-3xl font-semibold mt-2'>Read Daily news about <br />
                startup companies</h2>
            </div>

            <div className='border flex gap-6 p-10 rounded-xl mt-10'>
                <div>
                    <img src="https://consumotic.mx/wp-content/uploads/2021/03/210304_hombre-frustrado-computadora.png" className='rounded-xl' alt="" />
                </div>

                <div className=' text-white flex flex-col justify-between'>
                    <div>
                    <h1 className="text-2xl font-bold">Not Another Framework</h1>
                    <p className='mt-2 border-b pb-3'>We brought all the Remix goodies over to React Router and made improvements in the process.
                    Now it's time to bring those improved APIs back over to Remix where they started!</p>
                    </div>



                    <div className="items-center flex justify-between">
                <div>
                <div className="flex items-center gap-2">
                        <RiVerifiedBadgeLine/>
                        <p className="text-white">Collaboration Tools</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <RiVerifiedBadgeLine/>
                        <p className="text-white">Collaboration Tools</p>
                    </div>
                </div>

                    <div className="bg-white p-3 rounded-full inline-block animate-bounce hover:cursor-pointer">
                    <MdArrowOutward className='text-3xl text-red-500' />
                    </div>


                </div>

                </div>

               
               
            </div>

            {/* btn */}
            <div className="flex justify-center mt-5">
            <button className='btn btn-outline hover:bg-[#300907] text-white px-10'>Read More</button>
            </div>
        </div>
    );
};

export default Blogs;