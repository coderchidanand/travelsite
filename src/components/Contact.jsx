import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';


const Contact = () => {
    return (
        <div className='min-w-full min-h-full bg-blue-300/50 flex justify-center items-center'>
            <div className="contact flex flex-col md:flex-row md:justify-center">
                <div className='rigthside items-stretch flex-1 p-1 mb-1'>
                    <h1>Creating Memories, Luxuriously</h1>
                    <p className='ml-5'>
                        Step into a world of sheer luxury and elegance, where two souls unite to weave unforgettable connections. From lavish accommodations to gourmet cuisines, thrilling adventures, and cultural explorations, every moment is meticulously designed for comfort and refinement. This exclusive experience celebrates love and togetherness, leaving you with cherished memories that will last a lifetime.
                    </p>

                    <div className='flex p-2 mt-3'>
                        <button className='icon p-2 rounded-md m-auto self-end' style={{ color: '#ffffff' }}>
                            <RiCustomerService2Fill size={30} />
                        </button>
                        <div className='flex flex-col text-center p-1'>
                            <h3 className=' font-bold'>Leading Service</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <button className='icon p-2 rounded-md m-auto' style={{ color: '#ffffff' }}>
                            <MdOutlineTravelExplore size={30} />
                        </button>
                        <div className='flex flex-col text-center p-1'>
                            <h3 className=' font-bold'>Leading</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                {/* /////////////////////////////// */}

                <div className='leftside flex-1/2 p-1'>
                    <div class='box border border-black p-4 text-center'>
                        <h3 class='text-lg font-bold mb-2'>
                            GET ADDITIONAL DISCOUNT OF 30% *OFF
                        </h3>
                        <h3 class='text-lg font-bold mb-2'>
                            12 HOURS LEFT
                        </h3>
                        <button class='p-2 rounded-md text-white w-full'>
                            Book Now and Explore
                        </button>
                    </div>
                    <div className="journey">
                        <form className='w-full'>
                            <div className='flex flex-col '>
                                <label><h3>Destination</h3></label>
                                <select className='border rounded-md p-2'>
                                    <option value="">India</option>
                                    <option value="">Los Angles</option>
                                    <option value="">Paris</option>
                                    <option value="">France</option>
                                    <option value="">Maldives</option>
                                </select>
                            </div>

                            <div className='flex flex-col '>
                                <label htmlFor=""><h3>Check-in</h3></label>
                                <input className='border rounded-md p-2' type="date" name="" id="" />
                            </div>


                            <div className='flex flex-col mb-2'>
                                <label htmlFor=""><h3>Check-out</h3></label>
                                <input className='border rounded-md p-2' type="date" name="" id="" />
                            </div>
                            <button class='p-2 rounded-md text-white w-full mt-2'>
                                Book Now and Explore
                            </button>

                        </form>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Contact
