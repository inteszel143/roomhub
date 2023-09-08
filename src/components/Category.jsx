import React from 'react'



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
];



const Category = () => {
    return (
        <div className='max-w-screen-2xl mt-[5.5rem]'>
            {/* category for mobile devices */}
            <div className='md:hidden my-4 border-b shadow-sm '>
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
    )
}

export default Category