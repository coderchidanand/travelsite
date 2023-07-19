import React from 'react'
// import SeleCard from './SeleCard';

import BoraBora from '../assests/borabora.jpg';
import BoraBora2 from '../assests/borabora2.jpg';
import Maldives from '../assests/maldives.jpg';
import Maldives2 from '../assests/maldives2.jpg';
// import Maldives3 from '../assests/maldives3.jpg';
// import KeyWest from '../assests/keywest.jpg';
// import SelectsCard from './SelectsCard';


const Grid = () => {
    return (

        <div className='bg-blue-300/50'>
            <div className='mx-auto max-w-[1240px]  px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>

                {/* <SeleCard bg={BoraBora} text='India' />
            <SeleCard bg={BoraBora2} text='Paris' />
            <SeleCard bg={Maldives} text='Paris' />
            <SeleCard bg={BoraBora} text='Paris' />
            <SeleCard bg={Maldives2} text='Paris' />
            <SeleCard bg={Maldives} text='Maxico' /> */}


                <div className='relative '>
                    <img src={BoraBora} alt="" />
                    <div className='bg-gray-900/30 absolute top-0 left-0 h-full w-full hover:bg-transparent'>
                        <p className='left-4 bottom-4 absolute text-xl font-bold text-white'>India</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={BoraBora2} alt="" />
                    <div className='bg-gray-900/30 absolute top-0 left-0 h-full w-full hover:bg-transparent'>
                        <p className='left-4 bottom-4 absolute text-xl font-bold text-white'>Bora</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Maldives} alt="" />
                    <div className='bg-gray-900/30 absolute top-0 left-0 h-full w-full hover:bg-transparent'>
                        <p className='left-4 bottom-4 absolute text-xl font-bold text-white'>Maldive</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Maldives2} alt="" />
                    <div className='bg-gray-900/30 absolute top-0 left-0 h-full w-full hover:bg-transparent'>
                        <p className='left-4 bottom-4 absolute text-xl font-bold text-white'>Antigua</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Maldives} alt="" />
                    <div className='bg-gray-900/30 absolute top-0 left-0 h-full w-full hover:bg-transparent'>
                        <p className='left-4 bottom-4 absolute text-xl font-bold text-white'>Paris</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={BoraBora} alt="" />
                    <div className='bg-gray-900/30 absolute top-0 left-0 h-full w-full hover:bg-transparent'>
                        <p className='left-4 bottom-4 absolute text-xl font-bold text-white'>Paris</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid
