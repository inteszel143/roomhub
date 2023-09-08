import React from 'react'
import { BsBookmarkCheck } from 'react-icons/bs';

const data = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?cs=srgb&dl=pexels-scott-webb-1029599.jpg&fm=jpg&_gl=1*1jzgh65*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTI2NC4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 5,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '1,500',
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?cs=srgb&dl=pexels-fomstock-com-1115804.jpg&fm=jpg&_gl=1*e2osw*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY2Ni4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 7,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '2,500',
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg&_gl=1*372y7s*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY5Mi4wLjAuMA..',
        title: 'Samal, Babak',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '10,500',
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?cs=srgb&dl=pexels-tobi-463734.jpg&fm=jpg&_gl=1*12we2r9*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTcyNS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 1,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '5,500',
    },
    {
        id: 5,
        img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-2581922.jpg&fm=jpg&_gl=1*1lrkaxy*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTc3MS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '8,500',
    },
    {
        id: 1,
        img: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?cs=srgb&dl=pexels-scott-webb-1029599.jpg&fm=jpg&_gl=1*1jzgh65*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTI2NC4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 5,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '1,500',
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?cs=srgb&dl=pexels-fomstock-com-1115804.jpg&fm=jpg&_gl=1*e2osw*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY2Ni4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 7,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '2,500',
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg&_gl=1*372y7s*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY5Mi4wLjAuMA..',
        title: 'Samal, Babak',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '10,500',
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?cs=srgb&dl=pexels-tobi-463734.jpg&fm=jpg&_gl=1*12we2r9*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTcyNS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 1,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '5,500',
    },
    {
        id: 5,
        img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-2581922.jpg&fm=jpg&_gl=1*1lrkaxy*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTc3MS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '8,500',
    },
    {
        id: 1,
        img: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?cs=srgb&dl=pexels-scott-webb-1029599.jpg&fm=jpg&_gl=1*1jzgh65*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTI2NC4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 5,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '1,500',
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?cs=srgb&dl=pexels-fomstock-com-1115804.jpg&fm=jpg&_gl=1*e2osw*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY2Ni4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 7,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '2,500',
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg&_gl=1*372y7s*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY5Mi4wLjAuMA..',
        title: 'Samal, Babak',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '10,500',
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?cs=srgb&dl=pexels-tobi-463734.jpg&fm=jpg&_gl=1*12we2r9*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTcyNS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 1,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '5,500',
    },
    {
        id: 5,
        img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-2581922.jpg&fm=jpg&_gl=1*1lrkaxy*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTc3MS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '8,500',
    },
    {
        id: 1,
        img: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?cs=srgb&dl=pexels-scott-webb-1029599.jpg&fm=jpg&_gl=1*1jzgh65*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTI2NC4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 5,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '1,500',
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?cs=srgb&dl=pexels-fomstock-com-1115804.jpg&fm=jpg&_gl=1*e2osw*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY2Ni4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 7,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '2,500',
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg&_gl=1*372y7s*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY5Mi4wLjAuMA..',
        title: 'Samal, Babak',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '10,500',
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?cs=srgb&dl=pexels-tobi-463734.jpg&fm=jpg&_gl=1*12we2r9*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTcyNS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 1,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '5,500',
    },
    {
        id: 5,
        img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-2581922.jpg&fm=jpg&_gl=1*1lrkaxy*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTc3MS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '8,500',
    },
    {
        id: 1,
        img: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?cs=srgb&dl=pexels-scott-webb-1029599.jpg&fm=jpg&_gl=1*1jzgh65*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTI2NC4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 5,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '1,500',
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?cs=srgb&dl=pexels-fomstock-com-1115804.jpg&fm=jpg&_gl=1*e2osw*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY2Ni4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 7,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '2,500',
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg&_gl=1*372y7s*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY5Mi4wLjAuMA..',
        title: 'Samal, Babak',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '10,500',
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?cs=srgb&dl=pexels-tobi-463734.jpg&fm=jpg&_gl=1*12we2r9*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTcyNS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 1,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '5,500',
    },
    {
        id: 5,
        img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-2581922.jpg&fm=jpg&_gl=1*1lrkaxy*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTc3MS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '8,500',
    },
    {
        id: 1,
        img: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?cs=srgb&dl=pexels-scott-webb-1029599.jpg&fm=jpg&_gl=1*1jzgh65*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTI2NC4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 5,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '1,500',
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?cs=srgb&dl=pexels-fomstock-com-1115804.jpg&fm=jpg&_gl=1*e2osw*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY2Ni4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 7,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '2,500',
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg&_gl=1*372y7s*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY5Mi4wLjAuMA..',
        title: 'Samal, Babak',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '10,500',
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?cs=srgb&dl=pexels-tobi-463734.jpg&fm=jpg&_gl=1*12we2r9*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTcyNS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 1,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '5,500',
    },
    {
        id: 5,
        img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-2581922.jpg&fm=jpg&_gl=1*1lrkaxy*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTc3MS4wLjAuMA..',
        title: 'Ateneo, Davao City',
        available: 2,
        kasabotan: '1 mouth advance',
        monthly: '8,500',
    },
    {
        id: 1,
        img: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?cs=srgb&dl=pexels-scott-webb-1029599.jpg&fm=jpg&_gl=1*1jzgh65*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTI2NC4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 5,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '1,500',
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?cs=srgb&dl=pexels-fomstock-com-1115804.jpg&fm=jpg&_gl=1*e2osw*_ga*OTI4MjI1Mzc0LjE2OTQxODkyMDM.*_ga_8JE65Q40S6*MTY5NDE4OTIwNC4xLjEuMTY5NDE4OTY2Ni4wLjAuMA..',
        title: 'Matina Gravahan',
        available: 7,
        kasabotan: '1 mouth advance + 1 month deposite',
        monthly: '2,500',
    },
];


const Home = () => {
    return (
        <div className='max-w-screen-2xl mt-5'>


            {/* For mobile devices */}
            <div className='md:hidden'>
                <div>
                    {
                        data.map((item) => (
                            <div
                                key={item.id}
                            >
                                <div className='px-5 mt-8'>
                                    <img src={item.img} alt="" className='object-cover rounded-lg' />
                                    <div className='mt-2 flex justify-between items-center'>
                                        <h4 className='font-semibold'>{item.title}</h4>
                                        <div className='flex items-center gap-2'>
                                            <BsBookmarkCheck size={18} />
                                            <span className='text-sm text-tertiary'>{item.available} rooms</span>
                                        </div>
                                    </div>
                                    <span className='text-sm  text-tertiary'>{item.kasabotan}</span>
                                    <h1 className='mt-2 font-semibold'>₱{item.monthly} monthly</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='md:grid hidden md:grid-cols-2 lg:grid-cols-4 px-14 cursor-pointer'>

                {
                    data.map((item) => (
                        <div
                            key={item.id}
                            className='hover:translate-y-4 duration-300 transition-all ease-in-out'
                        >
                            <div className='px-2 mt-10'>
                                <img src={item.img} alt="" className='object-cover rounded-lg w-[500px] h-[320px]' />
                                <div className='mt-2 px-2 flex justify-between items-center'>
                                    <h4 className='font-semibold'>{item.title}</h4>
                                    <div className='flex items-center gap-2'>
                                        <BsBookmarkCheck size={18} />
                                        <span className='text-sm text-tertiary'>{item.available} rooms</span>
                                    </div>
                                </div>
                                <span className='text-sm  text-tertiary px-2'>{item.kasabotan}</span>
                                <h1 className='mt-2 font-semibold px-2'>₱{item.monthly} monthly</h1>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Home