import React from 'react';


const Navbar = () => {

    const listItems = [
        'Services',
        'Reviews',
        'Blogs',
        'Jobs'
    ]
    return (
        <div className="navbar shadow-lg shadow-red-600 text-white hover:shadow-red-800 px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
                listItems.map(element =>    <li><a>{element}</a ></li>)
            }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">RedTilt</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
                listItems.map(element =>   <li><a>{element}</a ></li>)
            }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-sm bg-red-700 rounded-full hover:bg-red-600 px-5 text-white">Start A Project</a>
  </div>
</div>
    );
};

export default Navbar;