import React, { useState } from 'react'
import { BsCheck } from 'react-icons/bs';

const Display = () => {

    const [isTaxes, setIsTaxes] = useState(false);

    const toggleTex = () => {
        setIsTaxes(!isTaxes);
    };


    return (
        <div className='max-w-screen-2xl'>

            {/* display total price */}
            <div className=' md:hidden mx-5 rounded-full mt-[11rem]'>
                <div className='border py-4 px-4 flex justify-between items-center rounded-xl shadow-sm'>
                    <div className=''>
                        <h4 className='font-semibold'>Display total price</h4>
                        <span className='font-light text-tertiary'>Includes all fees, before taxed</span>
                    </div>
                    <div onClick={toggleTex} className={`w-12 h-8 rounded-full ${isTaxes ? "bg-black" : "bg-[#B0B0B0]"} duration-300 ease-in-out`}>
                        <div className={`w-8 h-8 rounded-full bg-white ${isTaxes ? "ml-4" : ""} duration-300 ease-in-out flex items-center justify-center`}>
                            {isTaxes ? <BsCheck size={20} /> : " "}
                        </div>
                    </div>
                </div>
            </div>


            {/* display for large devices */}
            <div className='mt-[13rem] hidden md:flex place-content-center cursor-pointer'>
                <div className='border py-4 px-4 flex justify-between items-center w-1/2 rounded-xl shadow-sm'>
                    <div className='flex items-center justify-between space-x-6'>
                        <h4 className='font-semibold'>Display total price</h4>
                        <div className='h-4 border' />
                        <span className='font-light text-tertiary'>Includes all fees, before taxed</span>
                    </div>


                    <div onClick={toggleTex} className={`w-12 h-8 rounded-full ${isTaxes ? "bg-black" : "bg-[#B0B0B0]"} duration-300 ease-in-out`}>
                        <div className={`w-8 h-8 rounded-full bg-white ${isTaxes ? "ml-4" : ""} duration-300 ease-in-out flex items-center justify-center`}>
                            {isTaxes ? <BsCheck size={20} /> : " "}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Display