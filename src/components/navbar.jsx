import React from 'react';
import logo from '../assets/logo.png';
import ferch from '../assets/ferch.png';

const Header = () => {
    return (
      <header className="header text-center  items-center p-4 ">
      <div className='container flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 justify-between'>
        <img src={logo} alt="logo" />
        <nav>
          <ul className="flex justify-center gap-6 ">
            <li>
              <a href="./logo.png" className="">
                Asosiy
              </a>
            </li>
            <li>
              <a href="#" className="">
                Kurslarimiz <select name="" id=""></select>
              </a>
            </li>
            <li>
              <a href="#" className="">
                Blog
              </a>
            </li>
            <li className='flex'>
              <a href="#" className="">
                Biz haqimizda
              </a>
            </li>
            <li>
              <a href="#" className="">
                Bog’lanish
              </a>
            </li>
          </ul>
        </nav>
        <div className='flex gap-4 items-center'>
          <div className="cons">
            <img src={ferch} alt="" />
          </div>
          <div>
            <div className="selectr flex">
              <p className='kosmos flex'>EN<select name="language" id="language" className='bg-transparent'></select></p> 
            </div>
          </div>
          <div className="kosmos">
            Kirish
          </div>
        </div>
      </div>
    </header>
    
    );
};

export default Header;
