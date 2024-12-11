import React, { useEffect } from 'react';
import { RiVerifiedBadgeLine } from 'react-icons/ri';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(() => {
    Aos.init({duration : 1000})
 } , [])
    return (
        <div className="min-h-screen max-w-6xl py-10 lg:py-16 mx-4 lg:mx-auto"data-aos="fade-up">
        <div className="flex flex-col  md:flex-row md:gap-5  justify-between">
          <div className="text-center lg:text-left space-y-4">
            <h1 className="text-lg text-white font-bold">Got a project in mind?</h1>
            <h3 className="text-3xl font-bold text-white">Reserve a Call</h3>
            <ul className='space-y-2'>
                        <li className="flex gap-2 text-left  items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" />An in depth session to
                        understand your needs</li>
                  <li className="flex gap-2 text-left  items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" />Learn which plan is right
                  for your team</li>
                  <li className="flex gap-2 text-left  items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" /> Get onboarding help</li>
                  <li className="flex gap-2 text-left  items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" /> Cyber Audit</li>
                  <li className="flex gap-2 text-left  items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" /> Cyber governance</li>
                  <li className="flex gap-2 text-left  items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" /> Security as a service</li>
                  <li className="flex gap-2 text-left  items-center text-white"><RiVerifiedBadgeLine className="text-white text-lg font-semibold" /> Penetration Testin</li>


                  
             
             
             
                
                        </ul>
                        <h3 className="text-lg md:text-left font-bold text-white">Technical support or some query?
                        Contact support</h3>


          </div>
          <div className="border rounded-lg w-full md:max-w-sm lg:max-w-lg shrink-0 shadow-2xl mt-8 lg:mt-0">
            <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Full Name</span>
                </label>
                <input type="text" placeholder="TAHA HAIDER" className="input  input-bordered border-white bg-[#300907] text-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Work Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered border-white bg-[#300907] text-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Company Size</span>
                </label>
                <select className="select border-white select-bordered text-white bg-[#300907] w-full">
  
  <option>1-20</option>
  <option>21-40</option>
</select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">How can we help you?</span>
                </label>
                
<textarea className="textarea border border-white text-white bg-[#300907] textarea-bordered h-[100px]" placeholder="I am interested in redtilt for my team. i would like to learn more
about it..."></textarea>
                
              </div>
              <div className="form-control mt-6">
                <div className="flex gap-4 items-center">
                <p className="text-white">you can also email us at  
                Apac@redtilt.team</p>
                <button className="btn btn-outline text-white">Send Message</button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;