import React from 'react';

const Newsletter = () => {
    return (
       <div className="pb-10">
         <div className="bg-[#7a0903] container mx-auto flex justify-between items-center rounded-lg py-4  px-8">
                <div>
                    <h3 className="text-lg text-white">Newsletter</h3>
                    <p className='text-white'>Be the first one to know about insights, technologies and innovations.</p>
                </div>
                <div>
                    <button className="btn btn-md border-none px-8 bg-[#a30c04] hover:bg-[#500501] text-white">Subscribe</button>
                </div>
        </div>
       </div>
    );
};

export default Newsletter;