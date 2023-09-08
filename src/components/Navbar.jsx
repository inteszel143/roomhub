import React, { useState } from 'react'
import avatar from '../assets/avatar.png';
import { FiSearch } from 'react-icons/fi';
import { TbMenu2 } from 'react-icons/tb';
import { FaGlobe } from 'react-icons/fa6';
import { BiChevronRight } from 'react-icons/bi';


import logo from '../assets/logo.png';
import { PiFadersHorizontalFill } from 'react-icons/pi';

import davao from '../assets/category/davao.png';
import cebu from '../assets/category/cebu.png';
import tagum from '../assets/category/office.png';
import samal from '../assets/category/samal.png';
import rock from '../assets/category/rock.png';


const categories = [
    {
        id: 1,
        icon: cebu,
        name: 'Davao',
    },
    {
        id: 2,
        icon: davao,
        name: 'Cebu',
    },
    {
        id: 3,
        icon: tagum,
        name: 'Tagum',
    },
    {
        id: 4,
        icon: rock,
        name: 'Cotabato',
    },
    {
        id: 5,
        icon: samal,
        name: 'Samal',
    },
    {
        id: 6,
        icon: cebu,
        name: 'Cavite',
    },
    {
        id: 7,
        icon: cebu,
        name: 'Davao',
    },
    {
        id: 8,
        icon: davao,
        name: 'Cebu',
    },
    {
        id: 9,
        icon: tagum,
        name: 'Tagum',
    },
    {
        id: 10,
        icon: rock,
        name: 'Cotabato',
    },
    {
        id: 11,
        icon: samal,
        name: 'Samal',
    },
    {
        id: 12,
        icon: cebu,
        name: 'Cavite',
    },
    {
        id: 13,
        icon: cebu,
        name: 'Davao',
    },
];


const Navbar = () => {

    return (
        <header className='w-screen bg-white fixed top-0 right-0 left-0'>
            <nav className='md:py-5 py-4 '>

                {/* mobile device only */}
                <div>
                    {/* nav items for mobile devices */}
                    <div className='md:hidden mx-6'>
                        <div className='w-full px-4 py-2 border shadow-md rounded-full flex items-center justify-between'>
                            <div className='flex items-center  gap-5'>
                                <FiSearch size={18} />
                                <div>
                                    <h6 className='text-sm font-semibold'>Anywhere <br /> <span className='text-xs font-normal text-tertiary'>Any week - Add guests</span> </h6>
                                </div>
                            </div>
                            <div className='px-2 py-2 border rounded-full'>
                                <PiFadersHorizontalFill size={18} />
                            </div>
                        </div>
                    </div>


                    {/* categories */}
                    <div className='md:hidden mt-4 border-b shadow-sm '>
                        <div className='horizontal-scroll-container'>
                            {
                                categories.map((item) => (
                                    <div className='horizontal-scroll-content px-5' key={item.id}>
                                        <div className=''>
                                            <a href="" className='flex items-center'>
                                                <img src={item.icon} alt="" className='object-contain w-7' />
                                            </a>
                                            <p className='text-xs font-semibold text-center my-2 text-tertiary'>{item.name}</p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>


                </div>
                {/* end of mobile device only */}


                {/* for large devices */}
                <div className='md:flex grid-cols-3 justify-between hidden px-16 border-b pb-4'>
                    {/* logo */}
                    <div>
                        <a href="/" className='text-2xl font-bold flex items-center '>
                            <img src={logo} alt="logo" className='w-10 inline-block items-center' />
                            <span className='lg:flex text-primary hidden'>roomhub</span>
                        </a>
                    </div>
                    {/* center */}
                    <div className='border px-6 py-2 rounded-full flex items-center md:space-x-2 space-x-6 justify-center cursor-pointer'>
                        <h5 className='font-semibold'>Anywhere</h5>
                        <div className='h-4 border' />
                        <h5 className='font-semibold'>Any week</h5>
                        <div className='h-4 border' />
                        <h5 className='text-tertiary'>Add guest</h5>
                        <button className='flex items-center justify-center w-8 h-8 bg-primary rounded-full'>
                            <FiSearch className='text-white' size={15} />
                        </button>
                    </div>

                    {/* login */}
                    <div className='flex items-center md:space-x-2 space-x-5'>
                        <div className='px-4 py-2 hover:bg-neutral-100 rounded-full cursor-pointer'>
                            <h1>Find your home</h1>
                        </div>
                        <div className='w-10 h-10 hover:bg-neutral-100 flex items-center justify-center rounded-full cursor-pointer'>
                            <FaGlobe />
                        </div>
                        <div className='flex items-center px-2 py-2 space-x-2 border rounded-full hover:shadow-lg cursor-pointer'>
                            <TbMenu2 size={18} />
                            <img src={avatar} alt="avatar" className='w-8 object-contain' />
                        </div>
                    </div>

                </div>

                {/* for large devices categories */}
                <div className='md:flex hidden px-14 mt-6'>
                    <div className='horizontal-scroll-container flex items-center space-x-5'>
                        {
                            categories.map((item) => (
                                <div className=' px-5' key={item.id}>
                                    <div class="flex flex-col items-center cursor-pointer hover:translate-y-2 duration-300 transition-all ease-in-out">
                                        <img src={item.icon} alt="" className='object-contain w-7' />
                                        <p className='text-xs font-semibold my-2 text-tertiary '>{item.name}</p>
                                    </div>

                                </div>
                            ))
                        }
                        <div className='w-10 h-10 border flex items-center justify-center rounded-full cursor-pointer'>
                            <BiChevronRight size={25} />
                        </div>

                        <div className='border px-5 py-3 rounded-lg flex items-center space-x-2 cursor-pointer'>
                            <PiFadersHorizontalFill />
                            <span>Filters</span>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navbar